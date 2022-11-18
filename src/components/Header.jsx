import { Link } from "react-router-dom";
import { useState } from "react"

const Header = () => {
    const [hidden, setHidden] = useState(false)

    return (
        <nav className="tailwind-menu z-50 sticky top-0 w-full p-4 bg-blue-200 shadow-lg ">
            <div className="flex flex-wrap items-center justify-between container mx-auto px-4">
                <div className="flex flex-shrink-0 mr-12 ">
                    <span className="text-2xl font-[Poppins] cursor-pointer" >
                        <Link to="/"><h1>CineServer</h1></Link>
                    </span>
                </div>
                <div className="block lg:hidden" >
                    <button onClick={() => setHidden(!hidden)}
                        className="tailwind-burger flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
                </div>
                <div className={`submenu w-full flex-grow lg:flex lg:items-center lg:w-auto ${hidden ? "hidden" : ""}`}>
                    <div className="lg:mr-auto">
                        <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-700 hover:text-blue-700 font-semibold" 
                        to="/create">Adicionar Filme</Link>
                        <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-700 hover:text-blue-700 font-semibold" 
                        to="/about">Sobre nós</Link>
                    </div>
                    <div>
                        <a className="inline-block py-3 px-6 mt-4 lg:mt-0 lg:ml-6 leading-none
                     text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded shadow">Log in</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;