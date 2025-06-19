import Link from "next/link";

export default function RegisterPage() {
  async function registerUser(formData) {
    "use server";

    console.log(formData);
    console.log(formData.get("name"));

    return { message: "We Got The Data." };
  }

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
        <form action={registerUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              name="name"
              defaultValue="Deepak"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue="deepak@gmail.com"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              defaultValue="123456"
              className="mt-1 w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            // formAction={registerUser}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-medium hover:opacity-90"
          >
            Register
          </button>
        </form>
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
