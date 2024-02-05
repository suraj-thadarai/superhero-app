import React from 'react'

const SearchInput = ({ setSearchSuperHero }) => {
  
  return (
    <>
      <input className='m-4 w-96 text-center text-xl h-10 font-bold rounded-2xl bg-slate-300 '
      type='text' 
      placeholder='Search SuperHero or Super Villain' 
      onChange={(e)=>setSearchSuperHero(e.target.value)}      
      />
    </>
  )
}

export default SearchInput