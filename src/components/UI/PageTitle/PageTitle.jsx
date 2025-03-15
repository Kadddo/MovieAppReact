import css from "./PageTitle.module.css";
export default function PageTitle({title,info}) {
    return <div className={css.container}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.info}>{info}</p>
    </div>
}