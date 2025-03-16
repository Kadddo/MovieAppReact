import css from './BtnLoadMore.module.css';
export default function BtnLoadMore ({onClick}) {
    return <div className={css.cont}>
        <button className={css.btn} onClick={onClick}>Load More...</button>
    </div>
}