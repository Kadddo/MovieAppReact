import myImage from "../../image/icon.png";
import css from "./Navbar.module.css"
export default function Navbar () {
    return <nav className={css.navigation}>
        <a href="." className={css.logo}><img src={myImage} alt="logo"/></a>
        <div className={css.navlinks}>
        <a href="." className={css.link}>Movies</a>
        <a href="." className={css.link}>Tv Shows</a>
        <a href="." className={css.link}>Favorite</a>
        </div>
    </nav>
}