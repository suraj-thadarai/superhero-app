import React from 'react'

const Card = ({ name, image, powerStats }) => {
  console.log(`name:${name} image:${image} powerStats:${powerStats}`)
  return (
    <div className='flex flex-col items-center w-1/6 h-1/6 bg-sky-300 rounded-md shadow-lg p-2'>
        <img className='w-3/4 h-full p-3 rounded-2xl object-fill' src={image} alt={image}/>
        <h2 className='text-3xl font-bold'>{name}</h2>
        {/* <h3 className='text-xl font-bold'>{powerStats}</h3>         */}
    </div>
  )
}

export default Card