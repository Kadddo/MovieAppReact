import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import css from "./DetailsPage.module.css";
import Slider from "../../UI/Slider/Slider";

export default function DetailsPage() {
    const [filmVideo, setFilmVideo] = useState([]);
    const [filmDetails, setFilmDetails] = useState({});
    const { media_type, id } = useParams();
    const [page, setPage] = useState(0);

    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const youtubeUrl = "https://www.youtube.com/embed/";
    const rating = Math.round(filmDetails.vote_average || 0); // Защита от `undefined`

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
            }
        };

        fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setFilmVideo(res.results || [])) 
            .catch(err => console.error(err));
    }, [media_type, id]);



    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTAyYWUwNTQ4NTc5ODk1YzQ4OTFmZGMyMTBiYzBlYSIsIm5iZiI6MTc0MTk3MTAwOS40MzUwMDAyLCJzdWIiOiI2N2Q0NWU0MTAwYmJmZTZhNzU1M2NlYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5-A69UBsxS-ri2b4VQo4NUC8WLiUU2DtzlWmNb-vas'
            }
        };

        fetch(`https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(res => setFilmDetails(res))
            .catch(err => console.error(err));
    }, [media_type, id]);

    const handleNextBtn = () => {
        if (page < filmVideo.length - 1) {
            setPage(prevState => prevState + 1);
        }
    };

    const handleBackBtn = () => {
        if (page > 0) {
            setPage(prevState => prevState - 1);
        }
    };

    return (
        <div className={css.container}>
            <div className={css.img_container}>
                <img src={imageUrl + filmDetails.backdrop_path} alt="" />
                <div className={css.img_text}>
                    <span className={css.title_site}>Movie app</span>
                    <h1 className={css.title_film}>
                        {filmDetails.title || filmDetails.name}
                    </h1>
                </div>
            </div>

            <div className={css.info_container}>
                <div>
                    <img src={imageUrl + filmDetails.poster_path} alt="" />
                </div>
                <div className={css.info_text}>
                    <h2 className={css.info_title}>
                        {filmDetails.title || filmDetails.name}
                    </h2>
                    <p className={css.info_descript}>{filmDetails.tagline}</p>
                    <span className={css.stars}>
                        <IoIosStarOutline />{rating}
                    </span>
                    <p className={css.detail}>
                        <span className={css.detail_span}>Type:</span> {media_type}
                    </p>
                    <p className={css.detail}>
                        <span className={css.detail_span}>Status:</span> {filmDetails.status}
                    </p>
                    <p className={css.detail}>
                        <span className={css.detail_span}>Release Date:</span> {filmDetails.release_date}
                    </p>
                    <p className={css.detail}>
                        <span className={css.detail_span}>Run time:</span> {filmDetails.runtime} min
                    </p>
                    <p className={css.detail}>
                        <span className={css.detail_span}>Genres:</span>
                        {filmDetails?.genres?.map((genre) => genre.name).join(", ")}
                    </p>
                </div>
            </div>

            <div className={css.video_cont}>
                <h1 className={css.video_title}>Videos</h1>
                <div className={css.videos}>
                    <Slider onNextBtn={handleNextBtn} onBackBtn={handleBackBtn}>
                        {filmVideo.length > 0 && page < filmVideo.length ? (
                            <iframe
                            className={css.video}
                            src={`${youtubeUrl}${filmVideo[page]?.key}?autoplay=0`} // Отключаем автоигру
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>    
                        </iframe>
                        
                        ) : (
                            <p>No videos available</p>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
