import todos from "@/app/todos";
import { readFile, writeFile } from "node:fs/promises";

export async function GET() {
  const todoJSONString = await readFile("./src/app/todos.json", "utf-8");
  const todos = await JSON.parse(todoJSONString);
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

  return Response.json(newTodo, {
    status: 201,
  });
}
