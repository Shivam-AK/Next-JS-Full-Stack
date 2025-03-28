export const metadata = {
  // This metadata object set only Contact page meta data without Website title
  title: {
    absolute: "My Contact Only",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Contact Page</h1>
    </div>
  );
}
