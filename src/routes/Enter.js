import {useState, useEffect} from "react";
import MovieGrid from "../components/MovieGrid";
import { Link } from "react-router-dom";

const Enter =()=>{
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=> {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return(
        <div className="Enter">
            {loading ? <h1>Loading...</h1> : 
            <div className="Enter_div">
                <div className="logo_background">
                    <Link to="/home">
                        <img className="logo" src="assets/Netflix_2015_logo.svg.png" alt="logo"/>
                    </Link>
                </div>
                
                <div className="grid">
                    {movies.map((movie) =>
                        <MovieGrid
                            key={movie.id}
                            coverImg={movie.large_cover_image}
                            title={movie.title}
                        />
                    )}  
                </div>
            </div>}
        </div>
  )
}

export default Enter;