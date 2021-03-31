import React from 'react'
import ApiCall from './ApiCall'
import './CSS/Style.css'
const Select = () => {
    return (
        <>
        <div className="container-fluid">
        <div class="custom-shape-divider-top-1617168560">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
<div class="custom-shape-divider-top-1617168560 mt-3" style={{opacity:"0.3"}}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

<div className="container">
    <div className="row pt-5 ">
        <div id="Fullbox" className="col-6 mt-5 offset-3  ">
            <div id="Box" className="justify-content-center text-center pt-4 shadow-lg">
            <p id="header_text" className="my-auto"> Select an Account </p>
            </div>
            <div id="Box1" className=" pt-4 shadow-lg p">
            <div id="header_text" className="my-auto"> <ApiCall /> </div>
            </div>
        </div>
    </div>
</div>

        </div>
            
        </>
    )
}

export default Select
