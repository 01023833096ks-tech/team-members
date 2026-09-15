import { useState, useEffect } from "react";
import ProfileCard from "./profileCard";
import { Link } from "react-router-dom";
import member1 from "/member1.jpg";
import member2 from "/member2.jpg";
import member3 from "/member3.jpg";
import member4 from "/member4.jpg";
import member5 from "/member5.jpg";

export const initialTeamMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "Product Manager",
    image: member1,
  },
  {
    id: 2,
    name: "David Miller",
    title: "Software Engineer",
    image: member2,
  },
  {
    id: 3,
    name: "Michael Ross",
    title: "Marketing Lead",
    image: member3,
  },
  {
    id: 4,
    name: "James Wilson",
    title: "UX Designer",
    image: member4,
  },
  {
    id: 5,
    name: "Elena Rostova",
    title: "Operations Director",
    image: member5,
  },
];

function TeamMembers() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery("");
  };

  const [teamMembers, setTeamMembers] = useState(() => {
    const storedMembers = localStorage.getItem("teamMembers");

    return storedMembers ? JSON.parse(storedMembers) : initialTeamMembers;
  });

  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  const deleteMember = (memberId) => {
    setTeamMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== memberId),
    );
  };

  const filteredMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">People directory</p>
          <h1>Team members</h1>
          <p className="page-intro">
            A clear view of the people behind the work.
          </p>
        </div>
        <nav className="page-actions" aria-label="Team member actions">
          <Link to="/favorites" className="button button-secondary">
            Favorites
          </Link>
          <Link to="/form" className="button button-primary">
            Add member
          </Link>
        </nav>
      </header>

      <form className="search-form" onSubmit={handleSearch} role="search">
        <label className="sr-only" htmlFor="member-search">
          Search team members
        </label>
        <input
          id="member-search"
          type="search"
          placeholder="Search by name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="button button-quiet">
          Clear
        </button>
      </form>

      <div className="results-bar">
        <p>
          {filteredMembers.length}{" "}
          {filteredMembers.length === 1 ? "member" : "members"}
        </p>
      </div>

      <div className="team-members-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <ProfileCard
              key={member.id}
              member={member}
              onDelete={deleteMember}
            />
          ))
        ) : (
          <div className="empty-state">
            <h2>No team member found</h2>
            <p>Try a different name or clear your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default TeamMembers;
