import { createContext, useState, useContext, useEffect } from "react";

const TeamContext = createContext();

export const useTeamContext = () =>{ return useContext(TeamContext);}

export const TeamProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("team_favorites") ;
        
        if (storedFavs) setFavorites(JSON.parse(storedFavs)) ;
     } , []);

    useEffect(() => {
        localStorage.setItem("team_favorites" , JSON.stringify(favorites) )
    } , [favorites]);

    const addToFavorites = (member) => {
        setFavorites((prev) => [...prev, member]);
    }

    const removeFromFavorites = (memberId) => {
        setFavorites((prev) => prev.filter((member) => member.id !== memberId));
    }

    const isFavorite = (memberId) => {
        return favorites.some((member) => member.id === memberId);
    }

    const value = {
        favorites , addToFavorites , removeFromFavorites , isFavorite
    }

    return(
        <TeamContext.Provider value={value}>
            {children}
        </TeamContext.Provider>
    )
}