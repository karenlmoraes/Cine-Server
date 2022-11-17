import { useState } from "react";
import { useNavigate} from 'react-router-dom';
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
            axios.post('http://localhost:3000/blog', newPost)
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
            <h1>Adicionar um novo Filme no blog</h1>
            <form className="create-form" onSubmit={handleSubmit}>
               
                <input className="create-input" placeholder="TÍTULO" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
             
                <textarea className="create-input" placeholder="DESCRIÇÂO" value={body} onChange={(e) => setBody(e.target.value)} />
              
                <input className="create-input" placeholder="DIRETOR" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

                <input className="create-input" placeholder="DATA" type="text" value={date} onChange={(e) => setDate(e.target.value)} />

                <input className="create-input" placeholder="AVALIAÇÃO" type="text" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} />
               
                <input className="create-input" placeholder="IMAGEM URL" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <button className="criar" type="submit">Criar</button>
            </form>
        </div>
    );
}


export default Create;
