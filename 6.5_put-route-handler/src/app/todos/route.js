import todos from "@/app/todos";
import { writeFile } from "node:fs/promises";

export function GET() {
  return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);

  await writeFile("./src/app/todos.json", JSON.stringify(todos, null, 2));

  return Response.json(newTodo);
}
