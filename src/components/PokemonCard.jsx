import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeService'


const PokemonCard = () => {


    const{visibility,pokemon,dispatch}=useContext(PokeContext)

    


    const getPokemon=async()=>{
      const pokemon= await fetchPokemon(Math.floor(Math.random()*200+1))
      dispatch({
        type:"FETCH_POKEMON",
        payload:pokemon
      })
      
    }

    useEffect(()=>{
      getPokemon()
    },[])

     if(!pokemon){
      return(
        <div className="flex justify-center">

      <div className="relative">

        <div className="w-[420px] h-[420px] rounded-full border-4 border-black bg-gray-200 flex justify-center items-center ">

          <img
            src="https://cdn.dribbble.com/userupload/42095390/file/original-eb0650febbf162e56e7eacfb6efe259b.gif"
            className="h-full rounded-full"
            alt=""
          />

        </div>

        <div className="absolute -top-5 -left-5 bg-blue-600 text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_black] rotate-[-8deg]">
          ? ? ?
        </div>

      </div>

    </div>

      )
     }


  return (
    
    <div className="flex justify-center">

      <div className="relative">

        <div className="w-[420px] h-[420px] rounded-full border-4 border-black bg-gray-200 flex justify-center items-center ">

          <img
            src={pokemon.image}
            className={visibility ? "h-52" : "h-52 brightness-0"}
            alt=""
          />

        </div>

        <div className="absolute -top-5 -left-5 bg-blue-600 text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_black] rotate-[-8deg]">
          ? ? ?
        </div>

      </div>

    </div>
  

    
  )
}

export default PokemonCard