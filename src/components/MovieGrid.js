import PropTypes from "prop-types";

const MovieGrid = ({coverImg, title})=> {
    return(
        <div className="grid_span">
            <h5>{title}</h5>
            <img src={coverImg} alt={title}/>
        </div>
    )
}

MovieGrid.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default MovieGrid;