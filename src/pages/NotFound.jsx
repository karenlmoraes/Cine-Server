import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Erro 404</h2>
            <p>Pagina não encontrada.</p>
            <Link to="/" alt="home">Voltar para o início</Link>
        </div>
    );
}
 
export default NotFound;