import css from "./FilmList.module.css";
import FilmCard from "../FilmCard/FilmCard";

export default function FilmList({ filmList,onAdd,active}) {
  return (
    <div className={css.filmList}>
        <h1 className={css.title}>All ({filmList.length})</h1>
    <div className={css.container}>
      {filmList.map(({id,title,poster_path,vote_average}) => <FilmCard
            key={id}  // Уникальный ключ для каждого элемента
            title={title}
            poster={poster_path}
            rating={vote_average}
            active={active}
            onAdd={onAdd}
          />
      )}
      </div>
    </div>
  );
}