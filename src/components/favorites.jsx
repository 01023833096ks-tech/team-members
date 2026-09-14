import { useTeamContext } from "./contexts/teamMembersContext";
import { Link } from "react-router-dom";
import ProfileCard from "./profileCard";

export function Favorites() {
  const { favorites } = useTeamContext();

  return (
    <main className="page-shell favorites-page">
      <header className="page-header page-header-compact">
        <div>
          <p className="eyebrow">Saved for later</p>
          <h1>Favorite team members</h1>
          <p className="page-intro">
            The people you want to keep close at hand.
          </p>
        </div>
        <Link to="/" className="button button-secondary">
          Team members
        </Link>
      </header>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>
          <p>Save a team member from the directory to see them here.</p>
        </div>
      ) : (
        <div className="team-members-grid">
          {favorites.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
