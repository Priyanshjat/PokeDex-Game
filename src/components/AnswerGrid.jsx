import React, { useContext } from "react";
import PokeContext from "../context/PokeContext";
import { fetchPokemon } from "../context/PokeService";

const AnswerGrid = () => {
  const { pokemon, dispatch, visibility,hintUsed } = useContext(PokeContext);

  const checkAnswer = (name) => {
    if (pokemon.name === name) {
      dispatch({
        type: "INCREASE_SCORE",
      });
    } else {
      dispatch({
        type: "DECREASE_LIFE",
      });
    }

  setTimeout(async () => {
    const newPokemon = await fetchPokemon(
      Math.floor(Math.random() * 200 + 1)
    );

    dispatch({
      type: "FETCH_POKEMON",
      payload: newPokemon,
    });
  }, 1000);





  };
  

  
  
   

  const useHint = () => {
    if (visibility) return
    dispatch({
      type: "HINT"
})
     setTimeout(() => {
    dispatch({
      type: "HIDE_POKEMON",
    });
  }, 5000); 
  }
  
  

  return (
    <>

      <div className="grid sm:grid-cols-2 gap-5">
        {pokemon?.options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option)}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded border-4 border-black shadow-[6px_6px_0px_black]"
          >
            {option}
          </button>
        ))}
      </div>


      <div className="bg-yellow-300 border-4 border-black p-5 mt-6 shadow-[6px_6px_0px_black]">
        <button
          onClick={useHint}
          disabled={hintUsed}

          className="p-2 w-32 cursor-pointer my-2 rounded-md font-bold bg-gray-100 disabled:opacity-50"
        >
          💡 Hint
        </button>
        <p>
          {visibility
            ? `"Pika pika... it's looking quite electric!"`
            : "Click Hint (-50 points)."}
        </p>

      </div>
    </>
  );
};

export default AnswerGrid;