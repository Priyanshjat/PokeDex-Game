import React from 'react'

const LoseScreen = () => {
  return (
    <div className='p-8' >
    <h1 className='text-4xl font-bold text-green text-center'>You lost !!!</h1>
    <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyZWVtdjVpdGZiajFmeXVnOWswc25zdTV2bHUxOGU4NWV0cG52Mmo4NyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9dHM/fdGbhuUQpGQkkuuzIr/200.gif" className='h-96 w-full' alt="" />
    <button className=' p-2 my-4 w-full bg-red-500 hover:bg-red-700 cursor-pointer rounded-md font-bold ' >Play Again</button>
    </div>
  )
}

export default LoseScreen