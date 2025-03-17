import { IoIosStarOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import css from "./FilmCard.module.css";
import {useNavigate} from 'react-router-dom';

export default function FilmCard({ title, poster_path, vote_average ,id ,media_type ,name}) {
  console.log(media_type);
  const navigate = useNavigate();
  const [isAdd, setIsAdd] = useState(false);
  const [favFilms, setFavFilms] = useState(() => {
    // Проверяем и парсим данные из localStorage
    const storedMovies = localStorage.getItem("movies");
    // Если данные есть и они корректные, парсим их. Иначе возвращаем пустой массив.
    try {
      return storedMovies ? JSON.parse(storedMovies) : [];
    } catch (e) {
      return [];
    }
  });

  // Используем useEffect для синхронизации favFilms с localStorage
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(favFilms));
  }, [favFilms]);  // Этот useEffect сработает каждый раз, когда favFilms изменяется

  useEffect(() => {
    // Проверяем, был ли фильм уже добавлен
    if (Array.isArray(favFilms)) {
      const isAlreadyAdded = favFilms.some((movie) => movie.title === title);
      setIsAdd(isAlreadyAdded);
    }
  }, [favFilms, title]); // Добавляем зависимость от favFilms

  function handleAddBtn() {
    if (favFilms.some((movie) => movie.title === title)) return;

    const newMovie = { title, poster_path, vote_average ,id , media_type };

    // Обновляем состояние (добавляем новый фильм в список)
    setFavFilms((prevFilms) => [...prevFilms, newMovie]);
    setIsAdd(true); // Обновляем статус добавления
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const stars = Math.round(vote_average);

  return (
    <div className={css.card} onClick={()=> navigate(`/details/${media_type}/${id}`)}>
      <img className={css.images} src={imageUrl + poster_path} alt={title} />
      <span className={css.rating}>
        <IoIosStarOutline /> {stars}
      </span>
      <h2 className={css.title}>{title===undefined? name : title}</h2>
      <div className={css.buttonCont}>
        <button className={css.btnAdd} onClick={(e)=>{
          handleAddBtn();
          e.stopPropagation();
        }} disabled={isAdd}>
          {isAdd ? <IoMdCheckmark /> : <FaPlus />}
        </button>
        <span className={css.btnText}>
          {isAdd ? "On the favorites list" : "Add to my list"}
        </span>
      </div>
    </div>
  );
}
