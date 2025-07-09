export default function Home() {


  const  name = 'Husky Pre Commit Hook'

  name = 5

  console.log(name)


  return (
    <div className='grid min-h-screen place-content-center'>


      <main className="flex flex-col items-center gap-4 text-center font-[family-name:var(--font-geist-mono)]">


        <h1 className="text-4xl font-bold">Husky is Pre Commit Hook</h1>


        <h3 className='text-xl font-semibold'>
          Running Linter, Formatter, and Tests before a Commit is Created to
          ensure Code Quality and Consistency
        </h3>


      </main>


    </div>
  );
}
