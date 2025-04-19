import hierarchy from "@/components/nested-error-component-hierarchy.png";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>

      <img src={hierarchy.src} alt="Nested Error Component Hierarchy" />
      <button className="nav-link active cursor-pointer">
        <a
          href="https://nextjs.org/docs/app/building-your-application/routing/error-handling"
          target="_blank"
        >
          Read More
        </a>
      </button>
    </div>
  );
}
