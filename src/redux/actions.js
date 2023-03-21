import {ADD_FAV, REMOVE_FAV} from "./actions-types"

export function addFavorites(character) {
    return{
        type: ADD_FAV,  //define la accion que le paso
        payload: character //define el contenido de dicha accion
    }
}

export function removeFavorites(id) {
    return{
        type:REMOVE_FAV,
        payload: id
    }
}