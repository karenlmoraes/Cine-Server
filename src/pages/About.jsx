import Foto1 from "../../public/Foto1.png"
import Foto2 from "../../public/Foto2.png"
import Foto3 from "../../public/Foto3.png"
import Foto4 from "../../public/Foto4.png"
import Foto5 from "../../public/Foto5.png"

const About = () => {
    return (
        <div  className='flex flex-wrap  p-24'  >

                <div className=' sm:w-1/2 lg:w-1/5 grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={/*`${item.image}`*/Foto1} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                            <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                <h2 className='text-base font-medium text-indigo-300 mb-1 '></h2>
                                <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                                <div className='flex items-center flex-wrap'>
                                <div >
                                Igor do Santos
                                <br />
                              <a className="text-center" href="https://www.linkedin.com/in/igor-ferreira-a7541a1b5" target="_blank">Linkedin</a>/<a
                               href="https://github.com/IgorFerrer053" target="_blank">GitHub</a>

                                </div>
                                </div>
                            </div>
                    </div>
                </div>
                
                <div className=' sm:w-1/2 lg:w-1/5  grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={/*`${item.image}`*/Foto2} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                            <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                <h2 className='text-base font-medium text-indigo-300 mb-1 '></h2>
                                <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                                <div className='flex items-center flex-wrap'>
                                <div >
                                Karen Lopes
                                <br />
                                <a href="https://www.linkedin.com/in/karen-moraes-014251150" target="_blank">Linkedin</a>/<a
                                href="https://github.com/karenlmoraes" target="_blank">GitHub</a>

                                </div>
                                </div>
                            </div>
                    </div>
                </div>
          
                <div className=' sm:w-1/2 lg:w-1/5  grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={Foto3} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                            <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                <h2 className='text-base font-medium text-indigo-300 mb-1 '></h2>
                                <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                                <div className='flex items-center flex-wrap'>
                                <div >
                                Beatriz Fidelis
                                <br />
                              <a className="text-center" href="https://www.linkedin.com/in/beatriz-fidelis" target="_blank">Linkedin</a>/<a
                               href="https://github.com/fidelisbia" target="_blank">GitHub</a>

                                </div>
                                </div>
                            </div>
                    </div>
                </div>
          
                <div className=' sm:w-1/2 lg:w-1/5 grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={/*`${item.image}`*/Foto4} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                            <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                <h2 className='text-base font-medium text-indigo-300 mb-1 '></h2>
                                <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                                <div className='flex items-center flex-wrap'>
                                <div >
                                Thâmara Evelyn
                                <br />
                              <a className="text-center" href="https://www.linkedin.com/in/th%C3%A2mara-evelyn-328035115" target="_blank">Linkedin</a>/<a
                               href="https://github.com/Thamaraeevelyn" target="_blank">GitHub</a>

                                </div>
                                </div>
                            </div>
                    </div>
                </div>
          
                <div className=' sm:w-1/2 lg:w-1/5  grid' >
                    <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img src={/*`${item.image}`*/Foto5} alt="" className='bg-black lg:h-72 md:h-48 w-full object-cover object-center'></img>
                            <div className='p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in'>
                                <h2 className='text-base font-medium text-indigo-300 mb-1 '></h2>
                                <h1 className='textt-2x1 font-semibold mb-3 '></h1>
                                <div className='flex items-center flex-wrap'>
                                <div >
                                Matheus Lisboa
                                <br />

                                <a href="https://www.linkedin.com/in/matheus-lisboa-4637aa24b" target="_blank">Linkedin</a>/<a
                                href="https://github.com/MatokoLB" target="_blank">GitHub</a>

                                </div>
                                </div>
                            </div>
                    </div>
                </div>
          

            
               
       

               
            </div> 
      
    );
}

export default About;