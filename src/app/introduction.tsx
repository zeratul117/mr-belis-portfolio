import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Introduction() {
    const descriptionList = [
        "Full stack developer", 
        "Web developer", 
        "Self-taught Next.js developer",
        "Video game lover!",
        "Dancer"
   ]
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-12 items-center max-w-4xl mx-auto">
            <div className="flex justify-center sm:justify-start">
                <Image 
                    priority
                    src="/portfolio_picture.png" 
                    alt="Luis Belis" 
                    width={300} 
                    height={200}
                    className="rounded-lg"
                /> 
            </div>
            {/* Text on the right */}
            <div className="flex flex-col justify-center sm:justify-start sm:ml-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">Hello there,</h1>
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">I am <span className="text-blue-500">Luis Belis</span></h1>
                <h1 className="text-lg sm:text-xl font-semibold">
                    <ReactTyped
                        strings={descriptionList}
                        typeSpeed={70}
                        loop
                        backDelay={2000}
                        backSpeed={20}
                        cursorChar="|"
                        showCursor={true}
                        className="whitespace-nowrap"
                    />
                </h1>
            </div>
        </div>
    </div>
  );
}