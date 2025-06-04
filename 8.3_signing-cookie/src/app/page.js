"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useRouter } from "next/navigation";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const { theme = "dark", setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    if (response.status === 401) {
      return router.push("/login");
    }
    if (!data?.error) {
      setTodos(data.reverse());
    }
  };

  // Add new todo
  const addTodo = async (text) => {
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
      ContentType: "application/json",
    });

    if (response.status === 401) {
      return router.push("/login");
    }
    const data = await response.json();
    setTodos([data, ...todos]);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      fetchTodos();
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !todo.completed }),
      ContentType: "application/json",
    });

    if (response.status === 202) {
      fetchTodos();
    }
  };

  // Update todo text
  const updateTodo = async (id, text) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
      ContentType: "application/json",
    });

    if (response.status === 202) {
      fetchTodos();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
          <div className="space-x-4 flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={async () => {
                const response = await fetch("/api/logout", {
                  method: "POST",
                });
                if (response.status === 200) {
                  return router.push("/login");
                }
              }}
              className="px-4 py-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-300 text-black transition-colors"
            >
              LOGOUT
            </button>
          </div>
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
