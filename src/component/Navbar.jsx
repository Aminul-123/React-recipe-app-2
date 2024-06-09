import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const Navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search/${search}`);
  }
  return (
    <>
    <div className='h-[3rem] w-full bg-teal-500 flex items-center gap-[3rem] pl-[2rem]'>

    <div>
      <Link to={'/'} >
      <h2 className='sm:text-[17px] lg:text-[1.2rem] xl:text-[1.8rem] ' >React Recipe App</h2>
      </Link> 
    </div>
    <div className='text-black'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search any foods' className='p-1 outline-none border-none rounded rounded-lg' value={search} onChange={(e) => setSearch(e.target.value) } />
        </form>
    </div>
    <div className='flex lg:gap-[3rem] xl:gap-[3rem] cursor-pointer sm:gap-[3px] sm:text-[15px] '>
        <Link to={'/category/indian'}>Indian </Link>
        <Link to={'/category/american'}>American</Link>
        <Link to={'/category/british'}>British</Link>
        <Link to={'/category/chinese'}>Chinese</Link>
        <Link to={'/category/thai'}>Thai</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar;