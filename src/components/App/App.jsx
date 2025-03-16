import {BrowserRouter,Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
export default function App() {
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    <Routes>
        <Route path="/favorites" element={<Favorites />}/>
    </Routes>
</BrowserRouter>
}