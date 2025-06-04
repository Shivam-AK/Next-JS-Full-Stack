import { getLoggedInUser } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import Todo from "@/models/todo.model";

export async function GET(_, { params }) {
  const { id } = await params;

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const todo = await Todo.findOne({ _id: id, userId: user.id });

  if (!todo) {
    return Response.json(
      { message: "Todo Not Found." },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  const editedTodo = await request.json();
  const { id } = await params;

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  delete editedTodo?.id;

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: id, userId: user.id },
    editedTodo,
    {
      new: true,
    }
  );

  return Response.json(updatedTodo, {
    status: 202,
  });
}

export async function DELETE(_, { params }) {
  await connectDB();
  const { id } = await params;

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  await Todo.deleteOne({ _id: id, userId: user.id });

  return new Response(null, {
    status: 204,
  });
}
