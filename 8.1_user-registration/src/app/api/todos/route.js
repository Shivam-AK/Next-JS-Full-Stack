import connectDB from "@/lib/connectDB";
import Todo from "@/models/todo.model";

export async function GET() {
  await connectDB();
  const todos = await Todo.find();

  return Response.json(
    todos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  await connectDB();
  const todo = await request.json();

  const { id, text, completed } = await Todo.create({
    text: todo.text,
  });

  const newTodo = { id, text, completed };

  return Response.json(newTodo, {
    status: 201,
  });
}
