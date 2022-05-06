const GenreList = ({genreTitle, genreItem}) =>{
    return(
        <div className="GenreList">
            <h1>{genreTitle}</h1>
            <div className="GenreList_Column">
                {genreItem}
            </div>
        </div>
    )
}

export default GenreList;