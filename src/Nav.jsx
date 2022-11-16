import { Link } from "react-router-dom";

const Navbar = () => {
   
    return (    
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                </Link>
            </div>
            <div className="topnav" id="myTopnav">
                <Link to="/about">INFORMAÇÕES</Link>
                <Link to="/create">CRIAR</Link>
            </div>
        </div>
    );
}
export default Navbar;