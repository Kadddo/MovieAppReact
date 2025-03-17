import {BrowserRouter,Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
export default function App() {
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    <Routes>
        <Route path="/favorites" element={<Favorites />}/>
    </Routes>
    <Routes>
        <Route path="/details/:media_type/:id" element={<DetailsPage />}/>
    </Routes>
</BrowserRouter>
}