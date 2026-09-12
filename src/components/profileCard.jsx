
import { useTeamContext } from "./contexts/teamMembersContext";
import HeartIcon from "./heartIcon";
function ProfileCard({member}){
    
    
        const {addToFavorites , removeFromFavorites, isFavorite} = useTeamContext();
        const { id, name, title, image } = member;
        const favorite = isFavorite(id);

        const toggleFavorite = (e) => {
            e.preventDefault()
            if (favorite) {
                removeFromFavorites(id);
            } else {
                addToFavorites(member);
            }
        }
    

    return(
     
     <div className="ProfileCard">
        
        <img src={image} alt={name}></img>

        <HeartIcon isFavorite={favorite} onToggle={toggleFavorite}></HeartIcon>

        <h3>Name : {name}</h3>
       <p>Title : {title}</p>
     </div>
     
     
    
    );


}

export default ProfileCard