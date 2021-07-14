import React from "react";


//components
import Navbar from "../Components/Navbar/navbar.component";


const DefaultLayout = (props) => {
  
  return <> 
  
  <Navbar />
  {props.children} </>;
  

};

export default DefaultLayout;