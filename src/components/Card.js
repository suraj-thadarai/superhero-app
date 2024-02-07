import React from 'react'

const Card = ({ name, image, powerStats }) => {  
  return (
    <div className='w-[250px] h-[300px] bg-sky-300 rounded-md shadow-lg p-2 overflow-hidden hover:cursor-pointer hover:scale-105'>
      <div className='flex flex-col items-center'>
        <img className='w-[190px] h-[240px] p-3 rounded-2xl object-cover' src={image} alt={image}/>
        <h2 className='text-2xl font-bold'>{name}</h2>
        {/* <h3 className='text-xl font-bold'>{powerStats}</h3>         */}
      </div>
    </div>
  )
}

export default Card