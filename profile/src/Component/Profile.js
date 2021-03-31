import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { userid } = useParams();
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
                    items.filter((card) => card.id == userid).map((card) => (
                        <div className="container-fluid">
                            <div className="row ml-3 mr-3">
                                <div id="Navbar" className="col-3 d-flex align-items-center mt-3">
                                    <ul class="list-group list-group-flush ">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Morbi leo risus</li>
                                        <li class="list-group-item">Porta ac consectetur ac</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                                <div className="col-8  mt-3 ml-4">
                                    <div id="Head1" className="row mt-3">

                                        <div className="col-6 d-flex align-items-center">
                                            <p id="Profile_txt">Profile</p>
                                        </div>

                                        <div className="col-6 d-flex justify-content-end d-flex align-items-center">
                                            <span> <img className="mr-2" id="AVT" src={card.profilepicture} width="30px" height="30px"></img></span>   <span id="Profile_txt" class="nav-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{card.name}</span>

                                            <div class="dropdown-menu justify-content-center text-center ml-n5 w-50 shadow-lg">
                                            <img className="mr-2" id="AVT3" src={card.profilepicture} width="80px" height="80px"></img>
                                            <p className="mt-2" id="profi">{card.name}</p>
                                            <p className="mt-n2" id="emi">{card.email}</p>
                                            <hr id="hori"></hr>
                                            <Link id="Link"  to={"/3"}>
                                            <div className="d-flex justify-content-center text-center ml-3 mt-n2"><span> <img className="mt-1" id="AVT" src={"https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg"} width="30px" height="30px"></img></span>   <span id="Profile_txt" class="nav-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clementine Bauch</span></div></Link>
                                            <hr id="hori"></hr>
                                            <Link id="Link"  to={"/9"}>
                                            <div className="d-flex justify-content-center text-center ml-3 mt-n2"><span> <img className="mt-1" id="AVT" src={"https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"} width="30px" height="30px"></img></span>   <span id="Profile_txt" class="nav-link " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Glenna Reichert</span></div>
</Link>
                           <Link id="Link"  to={"/"}><button type="button" class="btn btn-danger mt-2">Sign Out</button></Link>  
                                            </div>


                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div id="Left1" className="col-4">
                                            <div class="justify-content-center text-center">
                                                <img className="mr-2 mb-3" id="AVT1" src={card.profilepicture} width="160px" height="160px"></img>
                                                <p id="Profile_txt">{card.name}</p>

                                            </div>
                                            <div className="row" >
                                                <div className="col">
                                                    <p  ><span id="username">Username :</span> <span id="Profile_txt">{card.username}</span></p>
                                                    <p className="mt-n3"><span id="username">email :</span> <span id="Profile_txt">{card.email}</span></p>
                                                    <p className="mt-n3" ><span id="username">Phone :</span> <span id="Profile_txt">{card.phone}</span></p>
                                                    <p className="mt-n3"><span id="username">Website :</span> <span id="Profile_txt">{card.website}</span></p>
                                                    <hr id="det"></hr>
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className="col">
                                                    <div class="justify-content-center text-center"><span id="username">Compeny</span></div>
                                                    <p  ><span id="username">Name</span> <span id="Profile_txt">{card.company.name}</span></p>
                                                    <p className="mt-n3"><span id="username">Catchphrace :</span> <span id="Profile_txt">{card.company.catchPhrase}</span></p>
                                                    <p className="mt-n3" ><span id="username">bs :</span> <span id="Profile_txt">{card.company.bs}</span></p>


                                                </div>
                                            </div>

                                        </div>
                                        <div id="right1" className="col-8">
                                            <div className="row" >
                                                <div className="col">
                                                    <div class="ml-2"><span id="username">Address :</span></div>
                                                    <p className="ml-4" ><span id="username">Street</span> <span id="Profile_txt">{card.address.street}</span></p>
                                                    <p className="ml-4 mt-n3"><span id="username">Suite :</span> <span id="Profile_txt">{card.address.suite}</span></p>
                                                    <p className="ml-4 mt-n3" ><span id="username">City :</span> <span id="Profile_txt">{card.address.city}</span></p>
                                                    <p className="ml-4 mt-n3" ><span id="username">Zipcode :</span> <span id="Profile_txt">{card.address.zipcode}</span></p>


                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className="col">
                                                    <img id="map" src={"https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"} width="600px" height="300px" alt="maps"></img>
                                                </div>
                                            </div>
                                            <div className="row d-flex justify-content-end" >
                                                <p className="ml-4" ><span id="username">lat</span> <span id="Profile_txt">{card.address.geo.lat}</span></p>
                                                <p className="ml-4" ><span id="username">lng</span> <span id="Profile_txt">{card.address.geo.lng}</span></p>


                                            </div>

                                        </div>

                                    </div>

                                </div>



                            </div>

                        </div>

                    ))
                }

            </>
        )
    }
}
export default Profile
