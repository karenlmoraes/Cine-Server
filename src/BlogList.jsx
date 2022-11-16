import { Link } from 'react-router-dom';
import React, {useState} from 'react';


const BlogList = ({blogs}) => {
    const [busca, setBusca] = useState('');
    const blogsFiltrados = blogs.filter(blog => blog.title.toLowerCase().includes(busca.toLowerCase()));
    return (
    <div className='conect-filme'>
        <div className='conect-filme-title'>
            <input className='blogfilter' type="text" placeholder='PESQUISAR SEU FILME' value={busca} onChange={(e) => setBusca(e.target.value)} /> 
        <div className="blog-list">
            <ul>
                {blogsFiltrados.map(blog => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <h3>{blog.title}</h3>                    
                            <img src={blog.image} alt={blog.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </div>    
    </div>

    );
}

export default BlogList;