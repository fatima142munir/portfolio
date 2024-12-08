import Link from "next/link";


const Header = () => {
    return (
        <header className="text-white body-font bg-darkest  shadow-white shadow-inner">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-5xl font-bold text-white">Portfolio</span>
                </h1>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                    <Link className="mr-5 hover:text-gray-900" href={'/about'}>About</Link>
                    <Link className="mr-5 hover:text-gray-900" href={'/contact'}>Contact</Link>
                    <Link className="mr-5 hover:text-gray-900" href={'/projects'}>Projects</Link>
                </nav>
                
            </div>
        </header>
    )
}

export default Header;
