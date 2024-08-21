'use client';
import React, { useContext } from 'react';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Cards from './Components/Cards';

const Page = () => {
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Filter />
      <Cards/>
    </div>
  );
}

export default Page;
