import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const movieAnimation = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Movie = styled.div`
    grid-column: span 1;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        animation: ${movieAnimation} 1s ease-in-out forwards;
    }
    h5 {
        position: absolute;
        top: 4px;
        left: 4px;
        color: white;
        }
`


const MovieGrid = ({coverImg, title})=> {
    return(
        <Movie>
            <h5>{title}</h5>
            <img src={coverImg} alt={title}/>
        </Movie>
    )
}

MovieGrid.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default MovieGrid;