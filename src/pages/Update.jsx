import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Update = () => {
    const send = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        axios.get('https://server-json.onrender.com/blog/' + id)
            .then((res) => {
                setIsPending(true)
                const data = res.data
                setBlog(data);
                setIsPending(false)
                console.log(res.data)
            })
            .catch((error) => {
                setError(error);
                setIsPending(false);
                console.log(error)
            })

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('https://server-json.onrender.com/blog/' + id, blog)
            .then((res) => {
                send('/');
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (<div>


        {isPending && 
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
        </div>}




    {!isPending && 
    <div className="update">
    <div className="bg-blue-200 min-h-screen flex items-center">
        <div className="w-full">
            <h2 className="text-center text-blue-400 font-bold text-2xl mt-5 mb-10">Filme</h2>
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">TÍTULO</label>
                        <input type="text"  value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })}
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">DESCRIÇÂO</label>
                        <input type="text" value={blog.author} onChange={e => setBlog({ ...blog, author: e.target.value })}
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                        {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">DIRETOR</label>
                        <textarea  value={blog.body} onChange={e => setBlog({ ...blog, body: e.target.value })}
                            className="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                        {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">DATA</label>
                        <input type="text" value={blog.date} onChange={e => setBlog({ ...blog, date: e.target.value })}
                            className="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                        {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">AVALIAÇÃO</label>
                        <input type="text" value={blog.avaliacao} onChange={e => setBlog({ ...blog, avaliacao: e.target.value })}
                            className="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                        {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">IMAGEM URL</label>
                        <input type="text"  value={blog.image} onChange={e => setBlog({ ...blog, image: e.target.value })}
                            className="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                        {/* <p className="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                    </div>

                    <button type="submit" className="block w-full bg-green-600 text-white font-bold p-4 rounded-lg">Atualizar</button>
                    <button className="py-3 px-8 mt-4  bg-slate-400 text-green-100 font-bold rounded-lg" onClick={() => send("/")}>Back</button>
                </form>
            </div>
        </div>
    </div>






</div>}
        
</div>  );
}

export default Update;
