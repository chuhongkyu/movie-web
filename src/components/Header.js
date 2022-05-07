import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header>
            <nav>
            <Link to="/"><img className="small_logo" src="assets/Netflix_2015_logo.svg.png" alt="logo"/></Link>
                <ul>
                    <Link to="/"><li>첫 화면</li></Link>
                    <li>액션</li>
                    <li>다큐멘터리</li>
                    <li>1시간 이상</li>
                </ul>
            </nav>
            <div className="services">
                <span><FontAwesomeIcon icon={faSearch} className="search" /></span>
                <span>더보기</span>
                <span>Profile</span>
            </div>
        </header>

    )
}

export default Header;