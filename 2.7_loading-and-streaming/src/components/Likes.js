export default async function Likes() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>5k Likes</div>;
}
