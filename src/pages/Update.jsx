import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Update = () => {
    const send = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

 

    useEffect(() => {
        axios.get('http://localhost:3000/blog/' + id)
            .then((res) => {
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

    },[]);



    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/blog/' + id, blog)
            .then((res) => {
                send('/');
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className="update">
            <h1>Atualizar</h1>
            <form className="update-form" onSubmit={handleSubmit}>

                <input type="text" className="update-input" value={blog.title} onChange={e => setBlog({ ...blog, title: e.target.value })} />

                <input type="text" className="update-input" value={blog.author} onChange={e => setBlog({ ...blog, author: e.target.value })} />

                <textarea className="update-input" value={blog.body} onChange={e => setBlog({ ...blog, body: e.target.value })} />

                <input type="text" className="update-input" value={blog.date} onChange={e => setBlog({ ...blog, date: e.target.value })} />

                <input type="text" className="update-input" value={blog.avaliacao} onChange={e => setBlog({ ...blog, avaliacao: e.target.value })} />

                <input type="text" className="update-input" value={blog.image} onChange={e => setBlog({ ...blog, image: e.target.value })} />

                <button className="atualizado" type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default Update;
