import { useNavigate, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {

    const history = useNavigate();
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:3000/blog/' + id);
    if (isPending) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }
    if (!blog) {
        return <div className="error">Não existe</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/update/' + id);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/blog/' + id, {
            method: 'DELETE'
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
        <div className="blog-details">
            <img src={blog.image} alt={blog.title} />
            <h1>{blog.title}</h1>
            <p><h3>Autor:</h3>{blog.author}</p>
            <p><h3>Descrição:</h3>{blog.body}</p>
            <p><h3>Data:</h3>{blog.date}</p>
            <p><h3>Avaliação:</h3>{blog.avaliacao}</p>
            <button className="atualizar" onClick={handleSubmit}>Atualizar</button>
            <button className="delete" onClick={handleDelete}>Deletar</button>
            <button className="voltar" onClick={() => history.push("/")}>Voltar</button>
        </div>
    );
    
}


export default BlogDetails;
