import React from "react";
import HeroSlider from "react-slick";

// component
import {NextArrow,PrevArrow} from "./Arrows.components"






const HeroCarousal = () => {
      

        const settingsLG = {
              
             arrows: true,
             autoplay: true,
             centerMode: true,
             centerPadding: "300px",
             slidesToShow:1,
             infinite: true,
             slidesToScroll: 1,
             nextArrow: <NextArrow />,
             prevArrow: <PrevArrow />,
                
        };

       const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };



  
      const images = ["https://images.unsplash.com/photo-1626184358417-1502f6faf7c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1626238586896-3e005566e0ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1626186899139-636f47740d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1114&q=80",
    "https://images.unsplash.com/photo-1622495805731-eefd22e836f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
    ];
      


    return (
      
        <>
       <div className="lg:hidden">
       <HeroSlider {...settings}>
          {
                 images.map((image) => (
                  
                    <div className="w-full h-56 md:h-80 py-3">
                        <img src={image} alt="testing" className="w-full h-full "/>
                        </div>

                 )
                 )
          }
        </HeroSlider>
       </div>
       <div className="hidden lg:block">
       <HeroSlider {...settingsLG}>
          {
                 images.map((image) => (
                  
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded"/>
                        </div>

                 )
                 )
          }
        </HeroSlider>
       </div>
        </>

    );

};



export default HeroCarousal;