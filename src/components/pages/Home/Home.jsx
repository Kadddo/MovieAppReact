import { useEffect, useState } from "react";
import FormSearch from "../../UI/FormSearch/FormSearch";
import PageTitle from "../../UI/PageTitle/PageTitle";
import FilmList from "./FilmList/FilmList";
export default function Home() {
    const[films,setFilms] = useState([]);
    const[searchFilm,setSearchFilm] = useState('');
    const[value,setValue] = useState('');
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
            }
          };
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then(res => res.json())
          .then(res => setFilms(res.results))
          .catch(err => console.error(err))
    },[])
    useEffect(()=>{
        if(searchFilm.length <= 0){
            return;
        }
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/multi?query=${searchFilm}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setFilms(res.results))
            .catch(err => console.error(err));
    },[searchFilm])

    function onChangeInput(event) {
        setValue(event.currentTarget.value);
    }
    function handleSearchBtn (e) {
        e.preventDefault();
        setSearchFilm(value);
    }

  return (
    <div>
      <PageTitle 
        title="MovieApp" 
        info="List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉" 
      />
      <FormSearch value={value} onChange={onChangeInput} onClick={handleSearchBtn}/>
      <FilmList filmList ={films} ></FilmList>
    </div>
  );
}
