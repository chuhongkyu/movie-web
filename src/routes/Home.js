import {useState, useEffect} from "react";
import Header from "../components/Header";
import GenreItem from "../components/GenreItem";
import GenreList from "../components/GenreList";

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

    const ActionMovie = movies.filter((movie)=> movie.genres.includes("Action"))

    console.log(ActionMovie)
    return(
        <div className="Home">
            {loading ? <h1>Loading...</h1> : 
            <div>
                <Header/>
                <GenreList
                    genreTitle={"액션"}
                    genreItem={ActionMovie.map((movie)=>
                        <GenreItem
                            key={movie.id}
                            title={movie.id}
                            coverImg={movie.medium_cover_image}
                            genres={movie.genres}   
                        />)  
                    }
                />
            </div>
            }
        </div>
  )
}

export default Home;