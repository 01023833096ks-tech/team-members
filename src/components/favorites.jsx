import { useTeamContext } from "./contexts/teamMembersContext";
import { Link } from "react-router-dom";
import ProfileCard from "./profileCard";

export function Favorites() {
    const {favorites} = useTeamContext();
    
    return (
        <div className="favorites-page">
             <Link to="/team-members " className="team-members-btn">Team Members</Link>
            <h2>Favorite Team Members</h2>
             {favorites.length == 0 ? (
                <h3 className="no-favorites">No favorites added yet !</h3>
             ) : (
                <div className="fav-members">{
                    favorites.map((member) => (
                        <ProfileCard key={member.id} member={member} />
                        
                    ))
                }</div>
             )}
        </div>
    )
} 

export default Favorites;