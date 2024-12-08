import Image from "next/image";
import Rectangle from "../images/Rectangle.png"
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript, SiBootstrap, SiTypescript, SiSanity } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { VscDebug } from "react-icons/vsc";

const Skills = () => {
    return (
        <section className="text-gray-600 body-font bg-darkest">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-5xl text-3xl font-bold title-font mb-4 text-white">SKILLS</h2>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">

                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-red-700 justify-items-center">
                            <ImHtmlFive />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-blue-700 justify-items-center">
                            <SiCss3 />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-yellow-700 justify-items-center">
                            <SiJavascript />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-blue-400 justify-items-center">
                            <RiTailwindCssFill />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-blue-400 justify-items-center">
                            <FaReact />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl justify-items-center">
                            <TbBrandNextjs />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl justify-items-center">
                            <FaGithub />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-purple-800 justify-items-center">
                            <SiBootstrap />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-blue-400 justify-items-center">
                            <SiTypescript />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-red-500 justify-items-center">
                            <SiSanity />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-blue-400 justify-items-center">
                            <FaPython />
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 lg:w-1/6 w-full">
                        <div className="shadow-white shadow-2xl border-2 py-5 border-gray-200 rounded-2xl bg-gray-200 text-8xl text-red-700 justify-items-center">
                            <VscDebug />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Skills;
