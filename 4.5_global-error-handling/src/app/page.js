import hierarchy from "@/components/nested-error-component-hierarchy.png";

export const dynamic = "force-dynamic";

export default function Home() {
  const randomNum = Math.random();
  console.log(randomNum);

  if (randomNum > 0.5) {
    throw new Error("Home Page Error.");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>

      <img src={hierarchy.src} alt="Nested Error Component Hierarchy" />
      <button className="nav-link active cursor-pointer">
        <a
          href="https://nextjs.org/docs/app/api-reference/file-conventions/error"
          target="_blank"
        >
          Read More
        </a>
      </button>
    </div>
  );
}
