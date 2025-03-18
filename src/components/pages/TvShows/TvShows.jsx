import { useEffect, useState } from "react";
import PageTitle from "../../UI/PageTitle/PageTitle";
import FilmList from "../Home/FilmList/FilmList";
export default function TvShows() {
    const [films,setFilms] = useState([]);
    const [page,setPage] = useState(1);
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=${page}`, options)
            .then(res => res.json())
            .then(res => setFilms(res.results))
            .catch(err => console.error(err));
    },[])
    useEffect(()=>{
        if(page === 1){
          return;
      }
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
          }
        };
        
        fetch(`https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${page}`, options)
          .then(res => res.json())
          .then(res => setFilms(prevFilm=>[...prevFilm,...res.results]))
          .catch(err => console.error(err));
  },[page]);
    function handleBtnLoadMore () {
        setPage(prevState => prevState + 1)
        console.log(page)
    }
    return <div>
        <PageTitle 
                title="Tv Shows" 
                info="List of Tv Show" 
              />
              <FilmList filmList ={films} onClickLoadMore={handleBtnLoadMore}></FilmList>
    </div>
}