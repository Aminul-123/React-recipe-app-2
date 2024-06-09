import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function TrendingSlider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleRequest = async () => {
      const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      const dataItem = await api.json();
     // console.log(dataItem.meals);
      setData(dataItem.meals);
    }
    handleRequest();
  }, [])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <>
    <div>
      <div>
        <h2 className='text-bold text-[1.5rem] mx-6 '>Trending</h2>
      </div>
      <div className='w-[95%] mx-6'>
      <Slider {...settings}>
        {
          data.map((d) => {
            return (
              <div key={d.idMeal}>
                <div>
                <Link to={`/details/${d.idMeal}`}>
                <img src={d.strMealThumb} alt="img" className='border rounded rounded-sm w-[11rem] mt-5  '  />
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

export default TrendingSlider