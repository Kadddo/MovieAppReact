import {BrowserRouter,Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Movies from "../pages/Movies/Movies";
import TvShows from "../pages/TvShows/TvShows";
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
    <Routes>
        <Route path="/movies" element={<Movies/>}></Route>
    </Routes>
    <Routes>
        <Route path="/tvshows" element={<TvShows/>}></Route>
    </Routes>
</BrowserRouter>
}