import {ADD_FAVORITE, DELETE_FAVORITE} from "./actions-types"

export function addFavorites(character) {
    return{
        type: ADD_FAVORITE,  //define la accion que le paso
        payload: character //define el contenido de dicha accion
    }
}

export function deleteFavorites(id) {
    return{
        type:DELETE_FAVORITE,
        payload: id
    }
}