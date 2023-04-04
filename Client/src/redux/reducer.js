import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actions-types"

const initialState = {
    myFavorites : [],
    allCharacters: []
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {

        case ADD_FAVORITE:
            return{
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites:[...state.myFavorites, payload]
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((element) => element.id !== payload)
            } 

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