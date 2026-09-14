import { useTeamContext } from "./contexts/teamMembersContext";
import HeartIcon from "./heartIcon";
function ProfileCard({ member }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useTeamContext();
  const { id, name, title, image } = member;
  const favorite = isFavorite(id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(member);
    }
  };

  return (
    <article className="profile-card">
      <div className="profile-image-wrap">
        <img src={image} alt={`${name}, ${title}`} />
        <HeartIcon isFavorite={favorite} onToggle={toggleFavorite} />
      </div>
      <div className="profile-card-content">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </article>
  );
}

export default ProfileCard;
