import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

export default function Skill() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center from-blue-900 to-indigo-900 p-8">
            <h1 className="text-6xl font-bold mb-12 text-white font-poppins animate-bounce">
                Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                    { icon: <SiNextdotjs className="text-4xl" />, name: "NEXT.JS", color: "#114ed7" },
                    { icon: <FaReact className="text-4xl" />, name: "REACT.JS", color: "#61dafb" },
                    { icon: <DiVisualstudio className="text-4xl" />, name: "C#", color: "#68217a" },
                    { icon: <DiVisualstudio className="text-4xl" />, name: "Visual Basic", color: "#68217a" },
                    { icon: <RiJavascriptFill className="text-4xl" />, name: "JAVASCRIPT", color: "#f7df1e" },
                    { icon: <VscAzure className="text-4xl" />, name: "AZURE DEVOPS", color: "#0078d4" },
                ].map((skill, index) => (
                    <div key={index} className="skill-item group relative p-6 rounded-lg bg-opacity-10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="text-white group-hover:text-5xl transition-all duration-300 ease-in-out">
                                {skill.icon}
                            </div>
                            <span className="text-xl font-semibold text-white group-hover:text-2xl transition-all duration-300 ease-in-out">
                                {skill.name}
                            </span>
                        </div>
                        <div className="h-1.5 mt-4 w-4/5 mx-auto rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-110" style={{ backgroundColor: skill.color }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}