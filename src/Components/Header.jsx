import { Link } from 'react-router-dom'
import '../Styles/header.css'

export default function Header(){
    return(
        <header>
            <h1 id="logo">Hamming</h1>
            <nav>
                <Link to={"/"} className="nav-link">Emisor</Link>
                <Link to={"/receptor"} className="nav-link">Receptor</Link>
                <Link to={"/about"} className="nav-link">Acerca de</Link>
            </nav>
        </header>
    )     
}