import React , { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

const Profile = () => {
    const { userid }= useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.users);
                    
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return (
        <>
        
        {
            items.filter((card)=> card.id == userid).map((card)=>(
                    <h1>{card.name}</h1>
            ))
        }
         
        </>
    )
}
}
export default Profile
