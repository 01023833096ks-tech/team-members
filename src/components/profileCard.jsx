
function ProfileCard({image , name , title}){
    

    return(
     
     <div className="ProfileCard">
        <img src={image} alt={name}></img>
        <h3>Name : {name}</h3>
       <p>Title : {title}</p>
     </div>
     
     
    
    );


}

export default ProfileCard