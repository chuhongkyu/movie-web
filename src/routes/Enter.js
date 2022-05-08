import {useState, useEffect} from "react";
import MovieGrid from "../components/MovieGrid";
import { Link } from "react-router-dom";
import styled from "styled-components";


const IntroScreen = styled.div`
    width: 100%;
    height: 100%;
`

const EnterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props)=> props.theme.backgroundColor};
    overflow: hidden;
`

const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: linear-gradient(to right, black 30%, rgba(0,0,0,0.1));
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 50px;
    img{
        width: 50vw;
    }
`

const GridMovie = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, minmax(70px, 1fr));
    grid-template-rows: 1fr auto;
    gap: 10px;
    transform: perspective(600px) rotateY(-10deg) rotateX(15deg) translateY(-200px); 
    transition: 0.5s;
    margin-left: 400px;
`

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
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `넷플릭스`;
    }, []);

    return(
        <IntroScreen>
            {loading ? <h1>Loading...</h1> : 
            <EnterContainer backgroundColor="black">
                <LogoContainer>
                    <Link to="/home">
                        <img src="assets/Netflix_2015_logo.svg.png" alt="logo"/>
                    </Link>
                </LogoContainer>
                
                <GridMovie>
                    {movies.map((movie) =>
                        <MovieGrid
                            key={movie.id}
                            coverImg={movie.large_cover_image}
                            title={movie.title}
                        />
                    )}  
                </GridMovie>
            </EnterContainer>}
        </IntroScreen>
  )
}

export default Enter;