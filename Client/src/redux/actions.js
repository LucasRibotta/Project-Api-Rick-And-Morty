import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions-types"
import axios from "axios";
const endpoint = 'http://localhost:3001/rickandmorty/fav/'

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         return dispatch ({
            type: ADD_FAV,
            payload: data,
         })
      } catch (error) {
         console.log(error)
      }
   }
 };

 export const removeFav = (id) => {
   return async(dispatch) => {
      try {
         
         const {data} = await axios.delete(`${endpoint}/${id}`)
         return dispatch ({
            type: REMOVE_FAV,
            payload: data,
         })
      
      } catch (error) { 
         console.log(error) 
      }
   }
 };

export const filterCards = (status) => ({
    type: FILTER,
    payload: status,
  });

  
export const orderCards = (id) => ({
    type: ORDER,
    payload: id,
  });