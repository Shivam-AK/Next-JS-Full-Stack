"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, UserIcon } from "lucide-react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useRouter } from "next/navigation";
import { getCurrentUser, logoutUser } from "@/actions/userActions";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "@/actions/todoActions";

export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});

  const { theme = "dark", setTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    fetchTodos();
    // fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUser = async () => {
    const response = await getCurrentUser();

    if (response.status === 401) {
      return router.push("/login");
    }
    if (response.success) {
      setUser(response.data);
    }
  };

  const fetchTodos = async () => {
    const response = await getAllTodos();

    console.log(response);
    if (response.status === 401) {
      return router.push("/login");
    }
    if (response.success) {
      setTodos(response.data.reverse());
      setUser(response.user);
    }
  };

  // Add new todo
  const handleAddTodo = async (text) => {
    const response = await addTodo({ text });

    console.log(response);
    if (response.status === 401) {
      return router.push("/login");
    }
    if (response.success) {
      setTodos([response.data, ...todos]);
    }
  };

  // Delete todo
  const handleDeleteTodo = async (id) => {
    const response = await deleteTodo(id);

    console.log(response);
    if (response.success) {
      setTodos(todos.filter((item) => (item.id === id ? false : item)));
    }
  };

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const response = await updateTodo(id, { completed: !todo.completed });

    if (response.success) {
      setTodos(
        todos.map((item) =>
          item.id === response.data.id ? response.data : item
        )
      );
    }
  };

  // Update todo text
  const handleUpdateTodo = async (id, text) => {
    const response = await updateTodo(id, { text });

    console.log(response);
    if (response.success) {
      setTodos(
        todos.map((item) =>
          item.id === response.data.id ? response.data : item
        )
      );
    }
  };

  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      return router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Todo App
          </h1>
          <div className="gap-6 flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="py-2 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="py-2 rounded-full hover:bg-muted transition-colors cursor-pointer"
                aria-label="User menu"
              >
                <UserIcon className="h-5 w-5" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 max-w-48 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 shadow-lg z-10 text-gray-900 dark:text-gray-100">
                  <div className="text-sm font-semibold">{user.name}</div>
                  <div
                    className="text-xs text-gray-600 dark:text-gray-400 mb-3 truncate"
                    title={user.email}
                  >
                    {user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 hover:underline text-sm cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <TodoForm addTodo={handleAddTodo} />

        <main className="mt-6">
          <TodoList
            todos={todos}
            deleteTodo={handleDeleteTodo}
            toggleTodo={toggleTodo}
            updateTodo={handleUpdateTodo}
          />
        </main>
      </div>
    </div>
  );
}
