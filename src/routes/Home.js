import {useState, useEffect} from "react";
import Header from "../components/Header";
import GenreItem from "../components/GenreItem";
import GenreList from "../components/GenreList";
import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px 30px;
`

const HomeContainerSmall = styled.div`
    width: 100%;
    height: 100vh;
    background-color:${(props)=>props.backgroundColor};
    color: ${(props)=>props.textColor};
`

const Home =()=>{
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async()=> {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `넷플릭스`;
    }, [])

    const ActionMovie = movies.filter((movie)=> movie.genres.includes("Action"))
    const DocMovie = movies.filter((movie)=> movie.genres.includes("Documentary"))
    const LogtimeMovie = movies.filter((movie)=> parseInt(movie.runtime) > 60)

    console.log(movies)
    return(
        <HomeContainer>
            {loading ? <h1>Loading...</h1> : 
            <HomeContainerSmall backgroundColor="black" textColor="white">
                <Header/>
                <GenreList
                    genreTitle={"액션"}
                    genreItem={ActionMovie.map((movie)=>
                        <GenreItem
                            key={movie.id}
                            title={movie.id}
                            coverImg={movie.medium_cover_image}
                            id={movie.id}
                        />)  
                    }
                />
                <GenreList
                    genreTitle={"다큐멘터리"}
                    genreItem={DocMovie.map((movie)=>
                        <GenreItem
                            key={movie.id}
                            title={movie.id}
                            coverImg={movie.medium_cover_image}
                            id={movie.id}
                        />)  
                    }
                />
                <GenreList
                    genreTitle={"1시간 이상"}
                    genreItem={LogtimeMovie.map((movie)=>
                        <GenreItem
                            key={movie.id}
                            title={movie.id}
                            coverImg={movie.medium_cover_image}
                            id={movie.id} 
                        />)  
                    }
                />
            </HomeContainerSmall>
            }
        </HomeContainer>
  )
}

export default Home;