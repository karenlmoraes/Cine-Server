import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const Create = () => {
    const history = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, body, date, avaliacao, author, image };
        fetch('http://localhost:3000/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/');
            }).catch(err => {
                console.log(err);
            }
            );
    }

    return (
        <div className="create">
            <h1>Criar novo Filme no blog</h1>
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
