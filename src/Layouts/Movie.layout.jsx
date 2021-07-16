import React from 'react'


//components
import Navbar from "../Components/Navbar/navbar.component";



 const MovieLayout = (props) => {
    return (
        <>
     <Navbar />
    {props.children} 
        </>
    )
};


export default MovieLayout;
