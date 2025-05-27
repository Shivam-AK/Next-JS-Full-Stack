import connectDB from "@/lib/connectDB";
import Todo from "@/models/todo.model";

export async function GET(_, { params }) {
  await connectDB();
  const { id } = await params;

  const todo = await Todo.findById(id);

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
  await connectDB();
  const editedTodo = await request.json();
  const { id } = await params;

  delete editedTodo?.id;

  const updatedTodo = await Todo.findByIdAndUpdate(id, editedTodo, {
    new: true,
  });

  console.log(updatedTodo);

  return Response.json(updatedTodo, {
    status: 202,
  });
}

export async function DELETE(_, { params }) {
  await connectDB();
  const { id } = await params;

  await Todo.findByIdAndDelete(id);

  return new Response(null, {
    status: 204,
  });
}
