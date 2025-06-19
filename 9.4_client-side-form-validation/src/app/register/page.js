"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/actions/user.action";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("Shivam");
  const [email, setEmail] = useState("shivam@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  const [state, formAction, isPending] = useActionState(registerUser, {});

  useEffect(() => {
    console.log(state, isPending);
  }, [state]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);

  //   ... Code Here ...
  // }

  const handleSubmit = async (formData) => {
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const formErrors = {};

    if (newUser.name.length < 3) {
      formErrors.name = "Name should be at least 3 character long.";
    }

    if (!newUser.email.includes("@")) {
      formErrors.email = "please Enter a Valid Email.";
    }

    if (newUser.password.length < 5) {
      formErrors.password = "Password should be at least 5 character long.";
    }

    if (Object.keys(formErrors).length) {
      return setError(formErrors);
    }

    setError("");

    // const data = await registerUser(newUser);
    // console.log(data);

    formAction(newUser);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-lg">
        <header className="mb-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Todo App
            </h1>
          </Link>
        </header>
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form action={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {error.name && <p className="text-red-400">{error.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.email && <p className="text-red-400">{error.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error.password && <p className="text-red-400">{error.password}</p>}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Register
          </button>
        </form>
        {state.message && (
          <p className="text-green-500 mt-4 text-center">{state.message}</p>
        )}
        {state.error && (
          <p className="text-red-400 mt-4 text-center">{state.error}</p>
        )}
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
