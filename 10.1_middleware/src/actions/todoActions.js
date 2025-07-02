"use server";

import { getLoggedInUser } from "@/lib/auth";
import Todo from "@/models/todo.model";

export async function addTodo(data) {
  try {
    const user = await getLoggedInUser();
    if (!user.name) return user;

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
    if (!user.name) return user;
    const { id, name, email, createdAt } = user;

    const todos = await Todo.find({
      userId: id,
    });

    return {
      success: true,
      message: "Fetched All Todos Successfully.",
      user: { name, email, createdAt },
      data: todos.map(({ id, text, completed }) => ({ id, text, completed })),
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getTodoById(id) {
  try {
    const user = await getLoggedInUser();
    if (!user.name) return user;

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
    if (!user.name) return user;

    await Todo.deleteOne({ _id: id, userId: user.id });

    return { success: true, message: "Todo Deleted Successfully." };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateTodo(todoId, data) {
  try {
    const user = await getLoggedInUser();
    if (!user.name) return user;

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
