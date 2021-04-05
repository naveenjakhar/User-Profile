import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Chatapi = () => {
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
          {items.map(item =>
                                    (
                                        <li  class="list-group-item"> <Link id="Link" to={`/${item.id}`}> <img id="image" src={item.profilepicture} width="25px" height="25" alt="image"></img><span id="naaa" className="ml-3">{item.name}</span></Link> </li>
                                    ))}  
        </>
    )
}
}
export default Chatapi
