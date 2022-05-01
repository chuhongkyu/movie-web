import PropTypes from "prop-types";

const Movie = ({coverImage, title, summary, genres})=>{
    return(
        <div>
            <img src={coverImage} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
              {genres.map((genre)=>
              <li key={genre}>{genre}</li>)}
            </ul>
          </div>
    )
}

Movie.propTypes = {
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

