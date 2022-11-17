import { Link } from "react-router-dom";
import { useState } from "react"

const Header = () => {
    const [hidden, setHidden] = useState(false)

    return (
        <nav class="tailwind-menu z-50 sticky top-0 w-full p-4 bg-white shadow lg:shadow-none">
            <div class="flex flex-wrap items-center justify-between container mx-auto px-4">
                <div class="flex flex-shrink-0 mr-12 ">
                    <span class="text-2xl font-[Poppins] cursor-pointer" >
                        <Link to="/"><h1>CineServer</h1></Link>
                    </span>
                </div>
                <div class="block lg:hidden" >
                    <button onClick={() => setHidden(!hidden)}
                        class="tailwind-burger flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
                </div>
                <div class={`submenu w-full flex-grow lg:flex lg:items-center lg:w-auto ${hidden ? "hidden" : ""}`}>
                    <div class="lg:mr-auto">
                        <Link class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-700 hover:text-blue-700 font-semibold" 
                        to="/create">Adicionar Filme</Link>
                        <Link class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-700 hover:text-blue-700 font-semibold" 
                        to="/about">Sobre nós</Link>
                    </div>
                    <div>
                        <a href="https://shuffle.dev/login?redirect=tailwind-builder" 
                        class="block lg:inline mt-4 lg:mt-0 text-gray-700 hover:text-blue-700 font-semibold">Log in</a>
                        <a class="inline-block py-3 px-6 mt-4 lg:mt-0 lg:ml-6 leading-none
                     text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded shadow">Try Demo</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;