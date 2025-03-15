import css from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
export default function App() {
    return <div className={css.container}>
        <Navbar></Navbar>
        <Home></Home>
    </div>
}