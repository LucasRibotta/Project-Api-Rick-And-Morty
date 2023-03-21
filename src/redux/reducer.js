import {ADD_FAVORITE, DELETE_FAVORITE} from "./actions-types"

const initialState = {
    myFavorites : []
}

export default function reducer(state = initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites:[...state.myFavorites, payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((element) => element.id !== payload)
            } 
            default:
                return{...state}
    }
}