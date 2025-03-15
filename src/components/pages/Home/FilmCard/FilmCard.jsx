import { IoIosStarOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import css from "./FilmCard.module.css";
export default function FilmCard ({title,poster,rating}) {
    
     const[isAdd,setIsAdd] = useState(false);

    function handleAddBtn() {
        setIsAdd(true);
    }
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const stars = Math.round(rating);
    return <div className={css.card}>
        <img className={css.images} src={imageUrl+poster} alt="" />
        <span className={css.rating}><IoIosStarOutline />{stars}</span>
        <h2 className={css.title}>{title}</h2>
        <div className={css.buttonCont}>
        <button className={css.btnAdd} onClick={handleAddBtn}>{isAdd?<IoMdCheckmark/>:<FaPlus/>}</button>
        <span className={css.btnText}>{isAdd?"Add to my list":"on the favorites list"}</span>
        </div>
    </div>
}