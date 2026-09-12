import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";


export function HeartIcon({isFavorite, onToggle}) {
    return(
        <button type="button" className="heart-btn" onClick={onToggle} aria-label="Toggle Favorite">
            <FontAwesomeIcon icon={isFavorite? faHeartSolid : faHeartRegular}
                          style = {{color: isFavorite? "#e63946" : "#888" , fontSize: "20px"}}>
            </FontAwesomeIcon>
        </button>
    );
}

export default HeartIcon;