import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';

function Category() {
    const {countryName} = useParams()
  //  console.log(countryName);
    const [data, setData] = useState([]);
    useEffect(() => {
        const handleCategory = async () => {
 const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
 const category =  await api.json();
 //console.log(category);
 setData(category.meals);
        }
        handleCategory()
    })
  return (
    <>
    <Navbar/>
    <div>
        <div>
            <h2 className='m-4 text-bold text-xl'> {countryName.toUpperCase()} Foods </h2>
        </div>
        <div className='flex flex-wrap'>
            {
                data.map((d) => {
                    return (
                        <div key={d.idMeal}>
                            <div>
                              <Link to={`/details/${d.idMeal}`}>
                              <img src={d.strMealThumb} alt="img" className=' w-[15rem] border rounded rounded-sm m-4 ' />
                              </Link> 
                                <h2 className='text-center text-bold text-[1.4rem]'>
                                    {d.strMeal}
                                </h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Category