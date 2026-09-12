import { useState } from "react";
import ProfileCard from "./profileCard";
import { Link } from "react-router-dom";
import member1 from "/public/member1.jpg"
import member2 from "/public/member2.jpg"
import member3 from "/public/member3.jpg"
import member4 from "/public/member4.jpg"
import member5 from "/public/member5.jpg"


function TeamMembers(){

   const teamMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "Product Manager",
    image: member1
  },
  {
    id: 2,
    name: "David Miller",
    title: "Software Engineer",
    image: member2
  },
  {
    id: 3,
    name: "Michael Ross",
    title: "Marketing Lead",
    image: member3
  },
  {
    id: 4,
    name: "James Wilson",
    title: "UX Designer",
    image: member4
  },
  {
    id: 5,
    name: "Elena Rostova",
    title: "Operations Director",
    image: member5
  }
];


const [searchQuery, setSearchQuery] = useState("")

const handleSearch = (e) => { 
  e.preventDefault();
 
  setSearchQuery("")
}

const filteredMembers = teamMembers.filter((member) => 
member.name.toLowerCase().includes(searchQuery.toLowerCase()))
  


    return(
      <div>
        <Link to="/favorites " className="favorites-btn">Favorites</Link>

        <h1>Team Members</h1>
        <form className="searchForm">
          <input type="text" placeholder="Search for a team member" className="searchInput"
          value={searchQuery} onChange={(e) =>{setSearchQuery(e.target.value)}}>
          </input>

          <button type="submit" onClick={handleSearch} className="searchButton">Reset</button>
        </form>

        <div className ="teamMembers">
         {filteredMembers.length > 0 ?
          filteredMembers.map(member => (
            <ProfileCard
                key = {member.id}
                id = {member.id}
                member = {member}
              
             /> 
        ) )
          : <h2 className="noMember">No team member found with this name </h2>
        } 
        
        </div>
      </div>
    );
}

export default TeamMembers;