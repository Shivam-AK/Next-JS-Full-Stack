import todosData from "@/app/todosData";

// const todosData = [
//   { id: 1, text: "Learn Next.js 15", completed: false },
//   { id: 2, text: "Master Node.js", completed: true },
//   { id: 3, text: "Learn MongoDB", completed: true },
// ];

export function GET() {
  console.log("Running GET Route Handler");

  // return Response.json(todosData);

  return new Response(JSON.stringify(todosData), {
    headers: {
      "Content-Type": "application/json", // Common MIME Types
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
    },
    status: 300,
    statusText: "OK Report Hai",
  });
}
