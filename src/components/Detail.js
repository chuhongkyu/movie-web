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
            <div className="Detail">
                <div className="Detail_text_column">
                    <h1>{movie.title}</h1>
                    <div className="Detail_text_sub">
                        <p>{movie.year}</p>
                        <p>Running time : {movie.runtime} min</p>
                        <p>{movie.rating}</p>
                    </div>
                    <div className="Detail_gerne_text">
                        <p>Gerne :</p>{movie.genres.map((genre)=> <p key={genre}>{genre}</p>)}
                    </div>
                    <div className="Detail_description">
                        <p>{movie.description_intro.length > 300 ? movie.description_intro.substr(0, 300)+"..." :movie.description_intro}</p>
                    </div>
                </div>
                <div className="Detail_img">
                    <img src={movie.large_cover_image} alt={movie.title}/>
                </div>
                
            </div>
            }
        </div>

    )
}

export default Detail;