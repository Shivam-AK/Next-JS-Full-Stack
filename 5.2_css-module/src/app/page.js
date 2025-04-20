import styles from "./home.module.css";

export default function Home() {
  console.log("Home Page");
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <div className="flex flex-col gap-5">
        <p>Welcome to our website!</p>

        <p>why Do not use tag name in css module file ?.</p>
        <p>❌ Don't use tag names in CSS Modules</p>
        <p>✅ Do use class names for scoped, component-specific styles</p>
      </div>
    </div>
  );
}
