import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Create = () => {
    const send = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, date, avaliacao, author, image };
        axios.post('https://server-json.onrender.com/blog', newPost)
            .then((res) => {
                send('/');
                console.log(res)
            })
            .catch((error) => {

                console.log(error)
            })
    }

    ///Div Cria filme
    return (
        <div className="create">

            <div class="bg-blue-200 min-h-screen flex items-center">
                <div class="w-full">
                    <h2 class="text-center text-blue-400 font-bold text-2xl mt-5 mb-10">Adicione um novo Filme</h2>
                    <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form action="" onSubmit={handleSubmit}>
                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Título</label>
                                <input placeholder="TÍTULO" type="text" value={title}
                                    onChange={(e) => setTitle(e.target.value)} class="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Descrição</label>
                                <textarea placeholder="DESCRIÇÂO" value={body}
                                    onChange={(e) => setBody(e.target.value)} class="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                                {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Diretor</label>
                                <input placeholder="DIRETOR" type="text" value={author}
                                    onChange={(e) => setAuthor(e.target.value)} class="border 
                                border-gray-300 shadow p-3 w-full rounded mb-"/>
                                {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Data</label>
                                <input placeholder="DATA" type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="border 
                                 border-gray-300 shadow p-3 w-full rounded mb-"/>
                                {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Avaliaçâo</label>
                                <input placeholder="AVALIAÇÃO" type="text" value={avaliacao}
                                    onChange={(e) => setAvaliacao(e.target.value)} class="border 
                                 border-gray-300 shadow p-3 w-full rounded mb-"/>
                                {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 font-bold text-gray-600">Imagem URL</label>
                                <input placeholder="IMAGEM URL" type="text" value={image}
                                    onChange={(e) => setImage(e.target.value)} class="border 
                                 border-gray-300 shadow p-3 w-full rounded mb-"/>
                                {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                            </div>

                            <button type="submit" class="block w-full bg-green-600 text-white 
                            font-bold p-4 rounded-lg">Criar</button>

                            <button class="py-3 px-8 mt-4  bg-slate-400 text-green-100 font-bold rounded-lg"
                                onClick={() => send("/")}>Back</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Create;
