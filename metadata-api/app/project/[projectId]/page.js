export async function generateMetadata({ params }) {
  // This metadata object set Dynamic Project page meta data
  const { projectId } = await params;

  return {
    title: projectId,
  };
}

export default async function Project({ params }) {
  const { projectId } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">
        Project Page is <span className="text-cyan-400">{projectId}</span>
      </h1>

      <p>write any Project Name in URL.</p>
    </div>
  );
}
