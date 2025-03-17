import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-12 items-center max-w-4xl mx-auto">
            <div className="flex justify-center sm:justify-start">
                <Image 
                    priority
                    src="/aboutImage.png" 
                    alt="About Me Image"
                    width={300} 
                    height={200}
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-center sm:justify-start sm:ml-8">
                <h1 className="text-6xl font-bold mb-12 text-white font-poppins animate-bounce">About</h1>
                <p className="text-lg sm:text-xl">
                    <span className="text-blue-500">Howdy! </span>
                    I am a dedicated and hardworking developer originally from the Dominican Republic. I have acquired multiple software developing skills that have allowed me to move my career forward and become a permanent resident of Canada by working as a software developer for a big company here in Sudbury. I love learning new technologies and ways to code things. I have always become a crucial asset in the companies I have worked for, and I do not stop pushing until I get what I need in life.
                </p>
            </div>
        </div>
    </div>
  );
}