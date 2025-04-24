"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid row items-center justify-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 items-center">
        <img
          src="/rog.jpg"
          alt="Republic of Gamers logo"
          width={500}
          height={500}
        />
        <Image
          src="/rog.jpg"
          alt="Republic of Gamers logo"
          width={500}
          height={500}
          quality={100} // Default Quality 75
        />
        <Image
          src="https://images.unsplash.com/photo-1741945939193-0293c3c9e87f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjd8fHxlbnwwfHx8fHw%3D"
          alt="Republic of Gamers logo"
          width={750}
          height={500}
          quality={100} // Default Quality 75
        />
        <Image
          loader={(props) => {
            console.log(props);
            return `https://res.cloudinary.com/shivam-ak/image/upload/v1741620823/${props.src}.jpg`;
          }}
          src="ymdumub2uk2y90tcjijj"
          alt="Republic of Gamers logo"
          width={1000}
          height={500}
          quality={80} // Default Quality 75
        />
      </main>
    </div>
  );
}
