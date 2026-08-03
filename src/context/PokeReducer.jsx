export const PokeReducer=(state,action)=>{
    switch(action.type){
     case "FETCH_POKEMON" :
        return{
          ...state,
          pokemon:action.payload,
          visibility:false
          
          
        }
        case "INCREASE_SCORE" :
        return{
          ...state,
          score:state.score+100
          
        }
        case "DECREASE_LIFE" :
        return{
          ...state,
          life:state.life-1
          
        }
         case "HINT":
      return {
        ...state,
        visibility: true,
        score: state.score - 50,
      };


    default:
        return state

}
}

