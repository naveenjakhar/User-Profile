import React , { useState, useEffect }  from 'react'

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
                        <li class="list-group-item"><img id="image" src={item.profilepicture} width="50px" height="50px"></img><span className="ml-3">{item.name}</span></li> ))}
  
</ul> 
        </div>
    )
}
}
export default ApiCall
