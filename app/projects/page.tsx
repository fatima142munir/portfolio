import Image from "next/image";
import todoReact from "../../public/assets/todoReactjs.webp"
import jobPortal from "../../public/assets/job-portal.jpg"
import todoJavaS from "../../public/assets/todoList.png"
import guessNumber from "../../public/assets/number-guess.png"
import eCommerce from "../../public/assets/e-commerce.jpg"
import resume from "../../public/assets/resume1.png"
import weather from "../../public/assets/weather.png"
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
                            <Link target="blank" href={"https://todo-javascript-two.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoJavaS}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using HTML, CSS, JavaScript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">To-Do App</h2>
                            <p className="leading-relaxed text-base">A simple yet functional Todo List app built using HTML, CSS, and JavaScript!</p>
                            <Link target="blank" href={"https://github.com/fatima142munir/todo-javascript.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://todo-nextjs-dun.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using React/Next.js with Typescript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Task List</h2>
                            <p className="leading-relaxed text-base">Simple functional Task List app built using React/Next.js with Typescript.</p>
                            <p className="leading-relaxed text-base">Local storage integration to save tasks persistently.</p>
                            <Link target="blank" href={"https://github.com/fatima142munir/todo-nextjs.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>

                        </div>
                    </div>
                    
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://dynamic-editable-resume-builder-seven.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={resume}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using HTML, CSS and Typescript</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Resume Builder</h2>
                            <p className="leading-relaxed text-base">Developed a user-friendly resume builder.The project enables users to create, and download resumes with ease, showcasing my skills in responsive design.</p>
                            <Link target="blank" href={"https://github.com/fatima142munir/hackathon-resume-builder.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>

                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://hackathone-figma-six.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={eCommerce}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using React/Next.js with Tailwind</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">E-Commerce Website</h2>
                            <p className="leading-relaxed text-base">Designed a modern and user-friendly UI for an e-commerce website during a course hackathon using Figma. </p>
                            <Link target="blank" href={"https://github.com/fatima142munir/hackathone-figma.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://weather-app-react-two-xi.vercel.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={weather}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using Reactjs, OpenWeatherMap API with Tailwind</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Weather App</h2>
                            <p className="leading-relaxed text-base">Created a weather web app using axios for fetching data. </p>
                            <Link target="blank" href={"https://github.com/fatima142munir/weather-app-react.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://cnet-web.consulnet.net/job_portal/about"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={jobPortal}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using Reactjs, Firebase & Tailwind</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Job Portal</h2>
                            <p className="leading-relaxed text-base">I worked on a job portal web app in which I used Firebase for user authentication and data management. </p>
                            <Link target="blank" href={"https://github.com/fatima142munir/react_app.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>
                            
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            <Link target="blank" href={"https://stream-lit-web-app-with-python-uv-package.streamlit.app/"}><Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={guessNumber}></Image></Link>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Using Python, UV & Streamlit</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Number Guessing Game</h2>
                            <p className="leading-relaxed text-base">Created a web app assignment using Python in which a CSV file generated the top 10 winning participants with fewer attempts. </p>
                            <Link target="blank" href={"https://github.com/fatima142munir/groth-mindSet-challenge.git"} className="text-indigo-500 inline-flex items-center mt-4">GitHub</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects;