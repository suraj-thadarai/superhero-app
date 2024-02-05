import React from 'react'
import Card from './Card'


const CardList = (props) => {
    return (
        <div className='flex flex-col flex-wrap gap-4 items-center justify-center sm:flex-row'>
            {props.superHeroes.filter((item) => item.name.toLowerCase().startsWith(props.searchSuperHero)).map((item) => (
                <Card key={item.id} image={item.image.url} name={item.name} powerStats={item.powerstats.strength} />
            ))}
        </div>

    )
}
export default CardList