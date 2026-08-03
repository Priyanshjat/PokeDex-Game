import React, { useContext, useEffect } from 'react'
import Pokeball from "../assets/pokeball.png"
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeService'

const Scoreboard = () => {

  const{score,life,dispatch}=useContext(PokeContext)

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

  return (
    
    <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_black] flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold">
          Score :{score}
        </h2>

       
      </div>

     <ul className='flex items-center justify-between space-x-3'>
      {
        life===3 ?(
          <>
           <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
       <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
       <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
          </>
        ) : life===2?(
          <>
           <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
       <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
       
          </>
          
        ) :life===1?(
          <>
           <li>
        <img className='h-8' src={Pokeball} alt="" />
       </li>
       
          </>
        ): <></>
      }
     </ul>

    </div>
  )
}

export default Scoreboard