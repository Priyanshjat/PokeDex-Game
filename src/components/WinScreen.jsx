import React from 'react'

const WinScreen = () => {

  const reloadGame=()=>{
    window.location.href="/"
  }


  return (
    <div className='p-8' >
    <h1 className='text-4xl font-bold text-green text-center'>You are Winner !!!</h1>
    <img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyajRwYWk4YWV4cDA5cHNycXpudDZzM3VibXF6NGVzNGlmbnFmaTdoMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lPoOHG39XAlV4it61H/giphy.gif" className='h-96 w-full my-2' alt="" />
    <button onClick={reloadGame} className=' p-2 my-4 w-full bg-green-500 hover:bg-green-700 cursor-pointer rounded-md font-bold ' >Play Again</button>
    </div>
  )
}

export default WinScreen