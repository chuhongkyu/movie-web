import {useState, useEffect} from "react";
import Movie from '../components/Movie';
import Header from "../components/Header";

const Home =()=>{
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=> {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return(
        <div className="Home">
            {loading ? <h1>Loading...</h1> : 
            <div>
                <Header/>
                {movies.map((movie)=>
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImage={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
                )}
            </div>}
        </div>
  )
}

export default Home