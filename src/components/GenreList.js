import React, {useState, useRef } from "react";
import throttle from "../utils/throttle";

const GenreList = ({genreTitle, genreItem}) =>{

    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    };

    const onDragEnd = () => {
        setIsDrag(false);
    };

    const onDragMove = (e) => {
        if (isDrag) {
            const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        
            scrollRef.current.scrollLeft = startX - e.pageX;
        
            if (scrollLeft === 0) {
              setStartX(e.pageX);
            }
            else if (scrollWidth <= clientWidth + scrollLeft) {
              setStartX(e.pageX + scrollLeft);
            }
          }
    };

    const delay = 100;
    const onThrottleDragMove = throttle(onDragMove, delay)


    return(
        <div className="GenreList">
            <h1>{genreTitle}</h1>
            <div 
                className="GenreList_Column" 
                ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onThrottleDragMove : null}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
            >
                {genreItem}
            </div>
        </div>
    )
}

export default GenreList;