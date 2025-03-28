export const metadata = {
  // This metadata object set only Blog page meta data
  title: "Blog",
  description: "This is Blog Page created in next app",
};

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Blog Page</h1>
    </div>
  );
}
