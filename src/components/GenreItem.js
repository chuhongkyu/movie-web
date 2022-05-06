const GenreItem=({coverImg, title})=>{
    return(
        <div>
            <img src={coverImg} alt={title}/>
        </div>
    )
}

export default GenreItem;