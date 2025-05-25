import connectDB from "@/lib/connectDB";
import mongoose from "mongoose";

export async function GET() {
  await connectDB();
  const todos = await mongoose.connection.db
    .collection("todos")
    .find()
    .toArray();

  return Response.json(todos);
}
