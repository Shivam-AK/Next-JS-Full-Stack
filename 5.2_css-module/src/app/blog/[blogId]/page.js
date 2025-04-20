import styles from "../blogId.module.css";
import Link from "next/link";

export default async function Blog({ params }) {
  const { blogId } = await params;
  console.log("blogId :", blogId);
  return (
    <div>
      <h1 className={styles.title}>
        Blogs Page <span className="text-cyan-400">{blogId}</span>
      </h1>

      <p>This is blog {blogId} page.</p>

      <div className="flex py-10 justify-between items-center flex-col">
        <Link href="/">
          <button className="nav-link active cursor-pointer">Home Page</button>
        </Link>
      </div>
    </div>
  );
}
