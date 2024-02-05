import React from 'react'

const SearchInput = ({ setSearchSuperHero }) => {
  
  return (
    <>
      <input className='m-4 w-40 text-center text-[0.6rem] h-10 font-bold rounded-2xl bg-slate-300 sm:text-xl sm:w-96'
      type='text' 
      placeholder='Search SuperHero or Super Villain' 
      onChange={(e)=>setSearchSuperHero(e.target.value)}      
      />
    </>
  )
}

export default SearchInput