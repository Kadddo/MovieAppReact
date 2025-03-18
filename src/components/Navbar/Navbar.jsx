import myImage from "../../image/icon.png";
import css from "./Navbar.module.css"
import { Link } from "react-router-dom";
export default function Navbar () {
    return <nav className={css.navigation}>
        <Link to="/" className={css.logo}><img src={myImage} alt="logo"/></Link>
        <div className={css.navlinks}>
        <Link to="/movies" className={css.link}>Movies</Link>
        <Link to="/tvshows" className={css.link}>Tv Shows</Link>
        <Link to="/favorites" className={css.link}>Favorite</Link>
        </div>
    </nav>
}