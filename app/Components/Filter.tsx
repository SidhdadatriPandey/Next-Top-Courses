'use client';
import React, { useContext } from 'react'
import { userContext } from '../Context/AppContext';

const Filter = () => {
  const{setCourseType}=useContext(userContext);
  return (
    <div className='w-11/12 bg-blue-600 font-bold p-4 rounded'>
      <ul className='text-sm flex flex-wrap justify-center gap-x-6 cursor-pointer sm:text-xl sm-gap-x-8 sm:justify-around'>
        <li onClick={()=>setCourseType("All")}>All</li>
        <li onClick={()=>setCourseType("Development")}>Development</li>
        <li onClick={()=>setCourseType("Business")}>Business</li>
        <li onClick={()=>setCourseType("Design")}>Design</li>
        <li onClick={()=>setCourseType("Lifestyle")}>Lifestyle</li>
      </ul>
    </div>
  )
}

export default Filter
