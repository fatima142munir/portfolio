import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="text-white body-font bg-darkest shadow-white shadow-inner">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={''} className="flex title-font font-medium items-center md:justify-start justify-center">

                    <span className="ml-3 text-xl">PORTFOLIO</span>
                </Link>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">© 2024 PORTFOLIO —
                    <Link href={''} className=" ml-1" rel="noopener noreferrer" target="_blank">@Fatima Munir</Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link target="blank" href={'https://www.facebook.com/fatima.pari.37'} className="ml-3">
                    <FaFacebookF />
                    </Link>
                    <Link target="blank" href={'https://x.com/FatimaMunir142'} className="ml-3">
                    <FaXTwitter />
                    </Link>
                    <Link target="blank" href={'https://github.com/fatima142munir'} className="ml-3">
                    <FaGithub />
                    </Link>
                    <Link target="blank" href={'https://www.linkedin.com/in/fatimamunir/'} className="ml-3">
                    <FaLinkedin />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer;