import React from "react";

//components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import Premier from "../Components/Premier/Premier.component";


const HomePage = () => {
    return (
        <>
        
        <div className="container mx-auto px-20">
            <h1 className="text-2xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
         <EntertainmentCardSlider />
         <Premier />
         </div>
        </>
    );
}; 


export default HomePage;