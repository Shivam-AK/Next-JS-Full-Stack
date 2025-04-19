"use client";

export default function Error({ error, reset }) {
  console.log(error.message, error.digest);

  return (
    <div>
      <h1>Something want wrong.</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl">About Page Error</h2>
        <p>{error.message}</p>
        <button
          className="nav-link active cursor-pointer"
          onClick={() => reset()}
        >
          Try again to reload About Page Component
        </button>
      </div>
    </div>
  );
}
