import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions-types"

const initialState = {
    myFavorites : [],
    allCharacters: []
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {

        case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: payload };

        case FILTER:
            if(!payload){
                return{
                    ...state,
                    myFavorites: [...state.allCharacters],
                };
            }
            const filteredChars = state.allCharacters.filter((char) => char.gender === payload);
            return{
                ...state,
                myFavorites: filteredChars
            }

            case ORDER:
                const sortedChars = [...state.myFavorites].sort((charA, charB) => {
                    if(payload === "ascendente"){
                        return charA.id - charB.id
                    }else if(payload === "descendente"){
                        return charB.id - charA.id
                    }
                    else{return 0;}
                })
                return{
                    ...state,
                    myFavorites: sortedChars,
                }
            default:
                return{...state}
    }
}