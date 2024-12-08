import Image from "next/image";
import profile from "../../public/assets/profile.avif"

const Hero = () => {
    return (
        <section className="text-white body-font bg-darkest">
            <div className="container mx-auto flex px-5 py-20 items-center justify-between flex-col md:flex-row">
                
                <div className="p-8 text-start lg:w-2/3 w-full">
                    <h1 className="text-white title-font md:text-6xl sm:text-5xl text-4xl mb-4 font-bold">Hi, I am Fatima,
                    Frontend Web Developer</h1>
                    
                    <div className="flex justify-start">
                        <button className="inline-flex text-darkest bg-white shadow-white shadow-md border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Resume</button>
                    </div>
                </div>
                <div className="rounded-full w-full justify p-8">
                    {/* <Image className="rounded-full" width={300} src={profile} alt="profile image"></Image> */}
                    <p className="mb-8 text-xl sm:text-2xl leading-tight">I am a passionate front-end developer student dedicated to crafting clean and effective user interfaces that bring ideas to life. As I work towards becoming a proficient front-end developer, I am excited to take on new challenges that help me grow and enhance my skill set.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;