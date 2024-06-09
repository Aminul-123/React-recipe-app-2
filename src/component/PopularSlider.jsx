import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularSlider() {
    const [data , setData] = useState([]);

    useEffect(() => {
        const reqAllMeal = async () => {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            const data = await api.json();
          //  console.log(data.meals);
            setData(data.meals);
        }
        reqAllMeal();
    }, []);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <>
    <div>
        <div>
            <h2 className='text-[2rem] text-bold px-8 pt-6  '>Popular Foods</h2>
       </div>
       
       <div className='w-[95%] px-8' >
       <Slider {...settings}>
        {
            data.map((d) => {
                return (
                    
                    <div key={d.idMeal} >
                        
                        <div  >
                        
                        <Link to={`/details/${d.idMeal}`}>
                        <img src={d.strMealThumb} alt="img" className='w-[14rem] border' />
                        </Link> 
                            
                           
                        </div>
                       
                    </div>
                    
                )
            })
        }
       </Slider> 
       </div>
      
    </div>
  
     
    
    </>
  )
}

export default PopularSlider