import todos from "@/app/todos";
import { writeFile } from "node:fs/promises";

export async function GET(_, { params }) {
  const { id } = await params;

  const todo = todos.find((todo) => id === todo.id);

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

  if (editedTodo.id) {
    return Response.json(
      { error: "Changing Id is not allowed." },
      {
        status: 403,
      }
    );
  }

  const todoIndex = todos.findIndex((todo) => id === todo.id);
  const findTodo = todos[todoIndex];
  delete editedTodo.id;

  const updatedTodo = { ...findTodo, ...editedTodo };

  todos[todoIndex] = updatedTodo;
  await writeFile("./src/app/todos.json", JSON.stringify(todos, null, 2));

  return Response.json(updatedTodo);
}

export async function DELETE(_, { params }) {
  const { id } = await params;

  const filterTodo = todos.filter((todo) => id !== todo.id);

  await writeFile("./src/app/todos.json", JSON.stringify(filterTodo, null, 2));

  return new Response(null, {
    status: 204,
  });
}
