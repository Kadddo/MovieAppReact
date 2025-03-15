import css from './FormSearch.module.css';
import btnIcon from "./LeftIcon.svg";
export default function FormSearch({value,onChange,onClick}){
    return <form className={css.container}>
        <input type="text" placeholder='Search Movies or TV Shows' className={css.input} onChange={onChange} value={value}/>
        <button type="submit" className={css.btn}><img src={btnIcon} alt="" onClick={onClick}/></button>
    </form>
}