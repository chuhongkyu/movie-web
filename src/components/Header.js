import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ()=>{
    return(
        <header>
            <nav>
                <img className="small_logo" src="assets/Netflix_2015_logo.svg.png" alt="logo"/>
                <ul>
                    <li>홈</li>
                    <li>Rating</li>
                    <li>Recently</li>
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