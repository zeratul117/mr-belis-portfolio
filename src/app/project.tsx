import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl font-bold mb-12 text-white font-poppins animate-bounce">Projects</h1>
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <a
          href="https://vote-movie-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <Image
            priority
            src="/previewMoviePage.png"
            alt="Website preview"
            width={300}
            height={200}
            className="rounded-lg"
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>
        <h2 className="mt-6 text-center text-white">Movie voter using PayloadCMS and Next.js</h2>
      </div>
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <h2 className="mt-6 text-center text-white">...And other projects that were within the companies that I worked for in the past.</h2>
      </div>
    </div>
  );
}