import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GenreItem=({coverImg, title, id})=>{
    return(
        <div className="GenreItem">
            <Link to={`/movie/${id}`}>
            <img src={coverImg} alt={title}/>
            </Link>
        </div>
    )
}

GenreItem.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GenreItem;