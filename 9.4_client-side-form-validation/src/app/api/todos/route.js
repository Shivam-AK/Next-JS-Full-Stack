import { getLoggedInUser } from "@/lib/auth";
import Todo from "@/models/todo.model";

export async function GET() {
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const todos = await Todo.find({ userId: user.id });

  return Response.json(
    todos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  const todo = await request.json();

  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const { id, text, completed } = await Todo.create({
    text: todo.text,
    userId: user.id,
  });

  const newTodo = { id, text, completed };

  return Response.json(newTodo, {
    status: 201,
  });
}
