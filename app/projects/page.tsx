import Image from "next/image";
import todoReact from "../../public/assets/todoReactjs.webp"
import todoJavaS from "../../public/assets/todoList.png"
import resume from "../../public/assets/resume1.png"
import Link from "next/link";

const Projects = () => {
    return (
        <section className="text-gray-600 body-font bg-darkest">
            <div className="container py-24 mx-auto justify-center">
                <div className="">
                    <div className="w-full mb-12">
                        <h1 className="sm:text-5xl text-3xl font-medium text-center title-font mb-2 text-white">Projects</h1>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 justify-center ">
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full m-6 p-4 bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link href={"https://todo-javascript-two.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoJavaS}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using HTML, CSS, JavaScript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">To-Do App</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link href={"https://todo-nextjs-dun.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using React/Next.js with Typescript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Task List</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link href={"https://dynamic-editable-resume-builder-seven.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={resume}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using HTML, CSS and Typescript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Resume Builder</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link href={"https://hackathone-figma-six.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using React/Next.js with Tailwind</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">E-Commerce Website</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects;