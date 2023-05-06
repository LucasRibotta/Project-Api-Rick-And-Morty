import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions-types";

const endpoint = "http://localhost:3001/rickandmorty/fav";

export const addFavorite = (character) => {
   return async (dispatch) => {
     try {
       const { data } = await axios.post(endpoint, character);
       return dispatch({
         type: ADD_FAVORITE,
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

 export const deleteFavorite = (id) => {
   return async (dispatch) => {
     try {
       const { data } = await axios.delete(`${endpoint}/${id}`);
       return dispatch({
         type: DELETE_FAVORITE,
         payload: data,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

export const filterCards = (gender) => ({
    type: FILTER,
    payload: gender,
  });

  
export const orderCards = (id) => ({
    type: ORDER,
    payload: id,
  });