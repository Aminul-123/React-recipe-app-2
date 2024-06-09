import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import TrendingSlider from './TrendingSlider'

function Details() {
    const {item_name} =  useParams()
   // console.log(item_name);
    const [data, setData] = useState([])
    const [active, setActive] = useState('ingredients');

    useEffect(() => {
        const handleReqById = async () => {
     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item_name}`);
          const singleItem = await api.json();
         // console.log(singleItem.meals);
          setData(singleItem.meals[0]);
        }
        handleReqById();
    }, [item_name])
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center m-6 text-center '>
      <div>
        <h2 className='text-bold text-[1.4rem] m-4'> {data.strMeal} </h2>
        <img src={data.strMealThumb} alt="img" className='w-[15rem] border rounded rounded-lg ml-8' />
      </div>
      <div className='flex gap-8 m-7'>
      <button className='h-[2rem] w-[6rem] bg-teal-800 rounded rounded-lg' 
      onClick={() => setActive('ingredients')}
      >Ingredients</button>
      <button className='h-[2rem] w-[6rem] bg-red-700 rounded rounded-lg'
      onClick={() => setActive('instruction')}
      >Instructions</button>

      </div>
      {
        active == 'ingredients' ? (
          <>
         
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient1} - {data.strMeasure1} </h2>
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient2} - {data.strMeasure2} </h2>
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient3} - {data.strMeasure3} </h2>
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient4} - {data.strMeasure4} </h2>
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient5} - {data.strMeasure5} </h2>
         <h2 className='text-bold text-[1.2rem]'> {data.strIngredient6} - {data.strMeasure6} </h2>
          
          </>
        ) 
        : (
          <div className='w-[60%] text-center'>
            {
              data.strInstructions
            }
          </div>
        )
      }
     

    </div>
    <TrendingSlider/>
    </>
  )
}

export default Details