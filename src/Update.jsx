import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/blog/' + id)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setIsPending(false);
            }
            ).catch(err => {
                setError(err);
                setIsPending(false);
            }
            );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/blog/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/');
            }
            ).catch(err => {
                console.log(err);
            }
            );
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

                <input type="text" className="update-input"  value={blog.image} onChange={e => setBlog({ ...blog, image: e.target.value })} />

                <button className="atualizado" type="submit">Atualizar</button>
            </form>
        </div>
    );
}

export default Update;
