import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import useAxios from '../components/UseAxios';
import axios from "axios";



const BlogDetails = () => {

    const send = useNavigate()
    const { id } = useParams();
    const { data: blog, isPending, error } = useAxios('https://server-json.onrender.com/blog/' + id);
    if (isPending) {
        return (
        <div className="loader  h-[80vh] flex flex-col justify-center items-center  ">
        <div className='
         h-16 w-16 border-4
         border-l-slate-500 
         border-r-slate-500 
         border-b-slate-500 
         border-t-blue-700 
         animate-spin ease-linear
         rounded-full'>
            </div>
            Carregando...
        </div>)


    }
    if (error) {
        return <div className="error h-[80vh] flex flex-col justify-center items-center ">{error}</div>;
    }
    if (!blog) {
        return <div className="error h-[80vh] flex flex-col justify-center items-center"><h1 className="text-red-600">Não existe</h1></div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        send('/update/' + id);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('https://server-json.onrender.com/blog/' + id)
            .then((res) => {
                send('/');
                console.log("delete ok")
            })
            .catch((error) => {
                console.log(error)
            })

    }



    return (
        <div className='flex flex-wrap  sm:p-2 md:p-32  '>
            <div className=' sm:w-1/2 lg:w-1/2 justify-end grid' >
                <img className='bg-black  object-cover object-center mr-5' src={blog.image} alt={blog.title} />
            </div>
            <div className=' sm:w-1/2 lg:w-1/2 grid' >
                <h2 >{blog.title}</h2>
                <p><h3>Descrição:</h3>{blog.body}</p>
                <p><h3 >Autor:</h3>{blog.author}</p>
                <p><h3>Data:</h3>{blog.date}</p>
                <p><h3>Avaliação:</h3>{blog.avaliacao}</p>
                <div className="">
                    <button className="py-3 px-6 mt-4 mr-1 bg-green-500 text-green-100 font-bold rounded-lg"
                        onClick={handleSubmit} >Atualizar</button>
                    <button className="py-3 px-6 mt-4 mr-1 bg-red-500 text-green-100 font-bold rounded-lg"
                        onClick={handleDelete} >Deletar</button>
                    <button className="py-3 px-7 mt-4  bg-slate-400 text-green-100 font-bold rounded-lg"
                        onClick={() => send(-1)}>Voltar</button>
                </div>

            </div>


        </div>

    );

}


export default BlogDetails;
