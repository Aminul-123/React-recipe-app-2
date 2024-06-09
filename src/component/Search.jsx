import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
    const {searchByName} = useParams();
    const [data , setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`);
            const data = await api.json();
           // console.log(data.meals)
            setData(data.meals);
        }
        fetchData()
    }, [searchByName]);
  return (
    <>
    <div>
        <h2 className='text-[2rem] mt-6 ml-[3.8rem]'> {searchByName} </h2>
    </div>
    <div className='flex flex-wrap gap-8 m-8  '>
    {
        data.map((d) => {
            return(
               <div key={d.idMeal} className='ml-[2.8rem]' >
 
 <img src={d.strMealThumb} alt="img" className='w-[15rem] ' />
 <h2 className='text-center text-bold text-[1.3rem] '> {d.strMeal} </h2>
               </div> 
               

                
            )
        })
    }
      
    </div>
    </>
  )
}

export default Search