export const metadata = {
  // This metadata object set only Home page meta data
  title: "Home",
  description: "This is Home Page created in next app",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Metadata API</h1>
    </div>
  );
}
