import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const Detail = ()=>{
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
    const json = await(await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )
    ).json();
    setMovie(json.data.movie)
    setLoading(false)
    console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div>
        {loading ? 
        <h1>Loading...</h1>:
        <div>
            <h1>{movie.title}</h1>
            <div>
                <p>{movie.runtime}:min</p>
                <p>{movie.rating}</p>
                <p>{movie.year}</p>
            </div>
        </div>}
        </div>

    )
}

export default Detail;