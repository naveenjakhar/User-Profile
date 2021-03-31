import React , { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom';

const ApiCall = () => {
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
                    console.log("result", result.users)
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
        <div className="ml-2 mr-2">
           <ul class="list-group list-group-flush">
           {items.map(item =>
                     (
                         <li class="list-group-item"> <Link id="Link" to={`/${item.id}`}> <img id="image" src={item.profilepicture} width="50px" height="50px" alt="image"></img><span className="ml-3">{item.name}</span></Link> </li> ))}
  
</ul> 
        </div>
    )
}
}
export default ApiCall
