import connectDB from "@/lib/connectDB";
import Todo from "@/models/todo.model";

export async function GET() {
  await connectDB();
  const todos = await Todo.find();

  return Response.json(todos);
}
