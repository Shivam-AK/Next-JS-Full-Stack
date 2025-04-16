export default async function SlowResponse2() {
  const response = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
