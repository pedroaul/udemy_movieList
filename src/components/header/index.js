import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return(
        <header>
            <Link className="brand" to="/">@yakeFlix</Link>
            <Link className="mymovies" to="/favorites">Meus filmes</Link>
        </header>
    )
}

export default Header;