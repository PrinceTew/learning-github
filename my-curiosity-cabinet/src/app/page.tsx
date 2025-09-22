import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        
      </header>
      
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left leading-[1.1]">
          My first Next.js app
        </h1>
        <p className="text-lg text-center sm:text-left max-w-[540px]">
          A boilerplate for a Next.js app using the new App Router, Tailwind CSS, and
          deployed on Vercel.
        </p>  
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="justify-center sm:justify-center flex flex-col gap-4 items-center sm:items-start">
          <p className="text-sm text-center sm:text-left max-w-[540px]">
            Made with ❤️ by{" "}
            <a
              className="underline underline-offset-4"
              href="https://github.com/PrinceTew"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prince Tew
            </a>
          </p>
          
        <h1 className="">Mark's social links</h1>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://osu.ppy.sh/users/30085612"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/osu.svg"
            alt="Osu icon"
            width={64}
            height={64}
          />
        </a>

        </div>
        
      </footer>
    </div>
  );
}
