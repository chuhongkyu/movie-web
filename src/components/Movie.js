import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({id, coverImage, title, summary, genres})=>{
    return(
        <div>
            <img src={coverImage} alt={title}/>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...`: summary}</p>
            <ul>
              {genres.map((genre)=>
              <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

