import { Link } from 'react-router-dom';
import React, {useState} from 'react';


const BlogList = ({blogs}) => {
    const [busca, setBusca] = useState('');
    const blogsFiltrados = blogs.filter(blog => blog.title.toLowerCase().includes(busca.toLowerCase()));
    return (
            <div className='flex flex-wrap -m-5 p-5'>
            {blogsFiltrados.map((item, index) => (
                <div key={index} className='p-5 sm:w-1/2 lg:w-1/5  grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={`${item.image}`} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                       <Link data={`${item.id}`} to={`/SobreMovie/${item.id}`} >
                        <div   className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                            <h2 className='text-base font-medium text-indigo-300 mb-1 '>{item.title}</h2>
                            <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                            <div className='flex items-center flex-wrap'>
                                <a href="#" className='text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0'>
                                    Descriçao
                                    <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth="2"
                                        fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                        <path d='M5 12H14'></path>
                                        <path d='M12 5l1 7-7 7'></path>
                                    </svg>
                                </a>
                                <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto
                        leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                                    <svg className='w-4 h-4 mr-1' viewBox='0 0 24 24' stroke='currentColor'
                                        strokeWidth="2"
                                        fill='none' strokeLinecap='round' strokeLinejoin='round'>
                                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                                        <circle cx="12" cy="12" r="3" ></circle>
                                    </svg>{item.avaliacao}
                                </span>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>))}
            </div>
        )    
}

export default BlogList;