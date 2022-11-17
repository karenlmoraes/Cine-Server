import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import useAxios from './UseAxios';
import axios from "axios";



const BlogDetails = () => {

    const send = useNavigate()
    const { id } = useParams();
    const { data: blog, isPending, error } = useAxios('http://localhost:3000/blog/' + id);
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
        send('/update/' + id);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3000/blog/' + id )
        .then((res) => {
          send('/');
          console.log("delete ok")
        })
        .catch((error) => {
          console.log(error)
        })
      
    }


    
    return (
        <div className="blog-details">
            <img src={blog.image} alt={blog.title} />
            <h1>{blog.title}</h1>
            <p><h3 >Autor:</h3>{blog.author}</p>
            <p><h3>Descrição:</h3>{blog.body}</p>
            <p><h3>Data:</h3>{blog.date}</p>
            <p><h3>Avaliação:</h3>{blog.avaliacao}</p>
            <button className="atualizar" onClick={handleSubmit}>Atualizar</button>
            <button className="delete" onClick={handleDelete}>Deletar</button>
            <button className="voltar" onClick={() => send(-1)}>Voltar</button>
        </div>
    );
    
}


export default BlogDetails;
