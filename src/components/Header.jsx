import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    
    <header className="bg-red-600 border-b-4 border-black flex justify-between items-center px-6 py-4 fixed top-0 w-full z-50">
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="logo"
          className="h-12 -rotate-3"
        />

        <h1 className="text-3xl font-black text-white">
          PokeGame
        </h1>
      </div>

      <div className="flex gap-6 text-white text-3xl">
        <button>🏆</button>
        <button>⚙️</button>
      </div>
    </header>
  )
  }

export default Header