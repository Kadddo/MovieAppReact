import css from "./Slider.module.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function Slider ({children,onNextBtn,onBackBtn,page}) {
    return <div className={css.slider}>
        <button className={css.btn_slider} onClick={onBackBtn} disabled={page<=0}><SlArrowLeft/></button>
        {children}
        <button className={css.btn_slider} onClick={onNextBtn} ><SlArrowRight/></button>
    </div>
}