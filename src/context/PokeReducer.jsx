export const PokeReducer=(state,action)=>{
    switch(action.type){
     case "FETCH_POKEMON" :
        return{
          ...state,
          pokemon:action.payload,
          visibility:false,
          hintUsed:false,
          
          
        }
        case "INCREASE_SCORE" :
        return{
          ...state,
          score:state.score+100,
          visibility:true,
          
        }
        case "DECREASE_LIFE" :
        return{
          ...state,
          life:state.life-1,
          visibility:true,
          
        }
         case "HINT":
      return {
        ...state,
        visibility: true,
        hintUsed: true,
        score: state.score - 50,
      };

          case "HIDE_POKEMON":
      return {
        ...state,
        visibility: false,
      };
      


    default:
        return state

}
}

