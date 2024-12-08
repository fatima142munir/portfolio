import Image from "next/image";
import aboutpic from "../../public/assets/aboutpic.webp"

const About = () => {
    return (
        <section className="text-white body-font bg-darkest">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium">About</h1>
                <Image className="w-3/4 mb-10 object-cover object-center bg-darkest shadow-white shadow-2xl rounded-lg" alt="about page pic" src={aboutpic}></Image>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Introduction</h1>
                    <p className="mb-8 leading-relaxed">Hello, I'm Fatima Munir, a driven and passionate individual from Karachi, Pakistan. With a keen interest in technology, I'm currently pursuing my IT course from Governor House Sindh, while simultaneously exploring my entrepreneurial spirit.
                    </p>
                    <p className="mb-8 leading-relaxed">
                    I'm eager to continue learning and expanding my skill set, staying up-to-date with the latest advancements in the tech industry. I'm excited to collaborate and contribute to innovative projects that make a meaningful impact.
                    </p>
                    <p className="mb-8 leading-relaxed">
                    As a self-taught frontend developer, I've acquired expertise in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS. My dedication and hard work have enabled me to successfully develop various projects that have garnered appreciation from my teachers and peers.
                    </p>
                    
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">As a skilled frontend developer, I offer the following services:</h1>
                    <p className="mb-8 leading-relaxed">
                    1. Web Development: Building responsive, user-friendly, and visually appealing websites using HTML, CSS, JavaScript, and frameworks like React, Nextjs.
                    </p>
                    <p className="mb-8 leading-relaxed">
                    2. Frontend Development: Creating interactive and engaging frontend experiences for web applications, including UI/UX design, prototyping, and testing.
                    </p>
                    <p className="mb-8 leading-relaxed">
                    3. Mobile-First Design: Designing and developing mobile-friendly websites and applications that provide seamless user experiences across various devices.
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

export default About;