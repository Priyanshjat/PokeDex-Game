import React, { useContext } from 'react'
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import ScoreBoard from "./components/ScoreBoard";
import AnswerGrid from "./components/AnswerGrid";

import BottomNav from "./components/BottomNav";
import DecorativeShapes from "./components/DecorativeShapes";
import PokeContext from './context/PokeContext';
import WinScreen from './components/WinScreen';
import LoseScreen from './components/LoseScreen';

const App = () => {


   const{score,life}=useContext(PokeContext)



  return (
    <>
     <Header />

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
       {
        score>=1000 ?(
         <WinScreen/>
        ):life===0?(
          <LoseScreen/>
        ):(
          <>
          <div className="text-center mb-12">
          <h1 className="text-6xl font-black">
            Guess Pokémon?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <PokemonCard />

          <div className="space-y-8">
            <ScoreBoard />
            <AnswerGrid />
            
          </div>
        </div> 
          </>
        )
       }
        

      </main>

      <BottomNav />
      <DecorativeShapes />
    
    
    </>
  )
}

export default App