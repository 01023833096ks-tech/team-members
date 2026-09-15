import { useTeamContext } from "./contexts/teamMembersContext";
import HeartIcon from "./heartIcon";
import { useNavigate } from "react-router-dom";
function ProfileCard({ member, onDelete }) {
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

  const deleteMemberHandler = () => {
    deleteMember(id);
  };

  const deleteMember = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    navigate("/form", { state: { member } });
  };

  const navigate = useNavigate();

  return (
    <article className="profile-card">
      <div className="profile-image-wrap">
        <img src={image} alt={`${name}, ${title}`} />

        <HeartIcon isFavorite={favorite} onToggle={toggleFavorite} />
      </div>
      <div className="profile-card-content">
        <h2>{name}</h2>
        <p>{title}</p>
        <button className="delete-button" onClick={deleteMemberHandler}>
          Delete
        </button>
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
