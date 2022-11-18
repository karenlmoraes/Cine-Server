import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found h-[80vh] bg-red-500 flex flex-col justify-center items-center ">
            <h1 className="text-[80px]">Erro 404</h1>
            <p>Pagina não encontrada.</p>
            <Link  className="hover:text-white" to="/" alt="home">Voltar para o início</Link>
        </div>
    );
}
 
export default NotFound;