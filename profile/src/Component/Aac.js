import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Aac = () => {
    const { userid } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [items1, setItems1] = useState([]);
    const [items11, setItems11] = useState(userid);


    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.users);
                    setItems1(result.users);


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
          {items.filter((card) => card.id == userid).map((card) => (<>
            <img src={card.profilepicture} width="30px" height="30px" style={{borderRadius:"15px"}}></img><span className="ml-1">{card.name}</span>
                                  </>  ))}  
        </>
    )
}
}
export default Aac

