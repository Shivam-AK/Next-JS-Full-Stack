import todos from "@/app/todos";

export async function GET(_, { params }) {
  const { id } = await params;

  const todo = todos.find((todo) => id === todo.id.toString());

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
