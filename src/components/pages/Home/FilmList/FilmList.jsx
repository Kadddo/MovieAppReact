import css from "./FilmList.module.css";
import FilmCard from "../FilmCard/FilmCard";
import BtnLoadMore from "../../../UI/BtnLoadMore/BtnLoadMore";

export default function FilmList({ filmList,onAdd,active,onClickLoadMore}) {
  return (
    <div className={css.filmList}>
        <h1 className={css.title}>All ({filmList.length})</h1>
    <div className={css.container}>
      {filmList.map(({id,title,poster_path,vote_average}) =>{
        console.log(poster_path);
        if(title !== '' && poster_path !== null){
       return <FilmCard
            key={id}  
            title={title}
            poster_path={poster_path}
            vote_average={vote_average}
            active={active}
            onAdd={onAdd}
          />
        }
        return "";
})}
      </div>
      {filmList.length >=20 && <BtnLoadMore onClick={onClickLoadMore}/>}
    </div>
  );
}