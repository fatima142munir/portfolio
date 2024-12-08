import Image from "next/image";
import todoReact from "../../public/assets/todoReactjs.webp"
import resume from "../../public/assets/resume2.png"

const Projects = () => {
    return (
        <section className="text-gray-600 body-font bg-darkest">
            <div className="container py-24 mx-auto justify-center">
                <div className="">
                    <div className="w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-2 text-white">Projects</h1>
                    </div>
                    {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                </div>
                <div className="flex flex-wrap -m-4 justify-center ">
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full m-6 p-4 bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                            <Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                            <Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                            <Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 m-6 p-4 w-full bg-gray-100 rounded-lg shadow-white shadow-2xl">
                        <div className="">
                            {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
                            <Image className="h-40 rounded w-full object-cover object-center mb-6" alt="todo pic" src={todoReact}></Image>
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects;