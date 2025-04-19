"use client";

export default function Error({ error }) {
  console.log(error.message, error.digest);
  return (
    <div>
      <h1>Something want wrong.</h1>
      <p className="!text-white">{error.message}</p>
      <p className="!text-white">Digest Id : {error.digest}</p>
    </div>
  );
}
