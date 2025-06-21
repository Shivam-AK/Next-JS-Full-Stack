"use server";

import { getLoggedInUser } from "@/lib/auth";
import Todo from "@/models/todo.model";
import { Types } from "mongoose";

export async function addTodo(data) {
  try {
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const { id, text, completed } = await Todo.create({
      text: data.text,
      userId: user.id,
    });

    return {
      success: true,
      message: "Todo Deleted Successfully.",
      data: { id, text, completed },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getAllTodos() {
  try {
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const todos = await Todo.aggregate([
      {
        $match: {
          userId: new Types.ObjectId(user.id),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          text: 1,
          completed: 1,
          user: {
            name: 1,
            email: 1,
            createdAt: 1,
          },
        },
      },
    ]);

    return {
      success: true,
      message: "Fetched All Todos Successfully.",
      user: todos[0].user,
      data: todos.map(({ _id, text, completed }) => ({
        id: _id.toString(),
        text,
        completed,
      })),
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getTodoById(id) {
  try {
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    const todo = await Todo.findOne({ _id: id, userId: user.id });

    if (!todo) {
      return { success: false, error: "Todo Not Found." };
    }

    return {
      success: true,
      message: "Fetched Todo Successfully.",
      data: todo,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteTodo(id) {
  try {
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    await Todo.deleteOne({ _id: id, userId: user.id });

    return { success: true, message: "Todo Deleted Successfully." };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateTodo(todoId, data) {
  try {
    const user = await getLoggedInUser();
    if (user instanceof Response) return user;

    delete data?.id;

    const { id, text, completed } = await Todo.findOneAndUpdate(
      { _id: todoId, userId: user.id },
      data,
      { new: true }
    );

    return {
      success: true,
      message: "Todo Updated Successfully.",
      data: { id, text, completed },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
