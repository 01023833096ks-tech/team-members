import ProfileCard from "./profileCard";

function TeamMembers(){

   const teamMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    title: "Product Manager",
    image: "./member1.jpg"
  },
  {
    id: 2,
    name: "David Miller",
    title: "Software Engineer",
    image: "./member2.jpg"
  },
  {
    id: 3,
    name: "Michael Ross",
    title: "Marketing Lead",
    image: "./member3.jpg"
  },
  {
    id: 4,
    name: "James Wilson",
    title: "UX Designer",
    image: "./member4.jpg"
  },
  {
    id: 5,
    name: "Elena Rostova",
    title: "Operations Director",
    image:"./member5.jpg"
  }
];

    return(
        <div className ="teamMembers">
         {teamMembers.map(member => (
            <ProfileCard
                key = {member.id}
                image = {member.image}
                name = {member.name}
                title = {member.title}
             />
        ) )
        }   
        </div>
    );
}

export default TeamMembers;