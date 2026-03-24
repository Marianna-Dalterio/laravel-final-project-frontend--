import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container">
            {/* Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    👗 My Shop
                </Link>

            {/* Toggle mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                    <span className="navbar-toggler-icon"></span>
                </button>

            {/* Links */}
                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">
                                Prodotti
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/categories">
                                Categorie
                            </NavLink>
                        </li>
                    </ul>
                </div>

        </div>
           
            

        </nav>
    );
}