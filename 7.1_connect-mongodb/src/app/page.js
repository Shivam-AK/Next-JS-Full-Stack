"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const { theme = "dark", setTheme } = useTheme();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/todos");
    const todosData = await response.json();
    setTodos(todosData.reverse());
  };

  // Add new todo
  const addTodo = async (text) => {
    const newTodo = { _id: crypto.randomUUID(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    setTodos((todo) => todo.filter((item) => item._id !== id));
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    setTodos((todo) =>
      todo.map((item) =>
        item._id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Update todo text
  const updateTodo = async (id, newText) => {
    setTodos((todo) =>
      todo.map((item) => (item._id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </header>

        <TodoForm addTodo={addTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </main>
      </div>
    </div>
  );
}
