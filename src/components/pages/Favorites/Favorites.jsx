import { useState, useEffect } from "react";
import FilmList from "../Home/FilmList/FilmList";
import PageTitle from "../../UI/PageTitle/PageTitle";
export default function Favorites() {
  const [favFilms, setFavFilms] = useState(() => {
    try {
      const storedFilms = localStorage.getItem("movies");
      return storedFilms ? JSON.parse(storedFilms) : []; 
    } catch (error) {
      console.error("Ошибка при чтении данных из localStorage:", error);
      return [];  
    }
  });
  return <div>
    <PageTitle title="Favorites"/>
    <FilmList filmList={favFilms}/>
  </div>
}
