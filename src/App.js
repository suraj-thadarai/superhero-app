import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchInput from './components/SearchInput';
import superHeroData from './data/superHeroes'
import superheroesAndVillains from './assets/images/superheroes-and-villains.png'
import Footer from './components/Footer';

function App() {
  const [superHeroes, setSuperHeroes] = useState(superHeroData)
  const [searchSuperHero, setSearchSuperHero] = useState('')

  

  return (
    <div className="App bg-gray-400">
      <header className='flex flex-col items-center bg-gray-400'>
        {/* <h1 className='text-6xl'>SuperHero</h1> */}
        <img className="w-1/2 my-2" src={superheroesAndVillains} alt='header logo' />
        <SearchInput className="my-4" setSearchSuperHero={setSearchSuperHero}/>
      </header>
      <main className='main'>
        <CardList superHeroes={superHeroes} searchSuperHero={searchSuperHero}/>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
