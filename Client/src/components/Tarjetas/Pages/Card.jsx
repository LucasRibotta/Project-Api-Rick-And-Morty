import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFav, removeFav} from "../../../../src/redux/actions";
import { connect } from 'react-redux';




function Card({character, onClose, removeFav, addFav, myFavorites}) {
   const {id, name, image} = character;

   const[isFav, setIsFav] = useState(false);

   

   const handleFavorite = () =>{
      console.log(isFav)
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav(character)
      }
   }

 useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);  

   
  

       return (
       
         <div className={style.card} >
     
            <button type="button" className={style.deleteButton} onClick={() => onClose(id)}>X</button>
            {
               isFav ? (
                <button className={style.favbutton} onClick={handleFavorite}>❤️</button>
               ) : (
                 <button className={style.favbutton} onClick={handleFavorite}>🤍</button>
             )
         }

            <div className= {style.card_imageContainer} >
            <img  className={style.card__image} src= {image} alt={name} />

            </div>

            <div className={`${style.card_textContainer} ${style.hiddenText} `}>
            <Link to={`/detail/${id}`} className = {style.link}>
               <h2 className={style.card__title}> {name} </h2>
               </Link>
            </div>

         </div>
         
      );
   }

   const mapStateToProps = (state) =>{
      return{
         myFavorites: state.myFavorites
      }
   }

   const mapDispatchToProps = (dispatch) => {
      return{
         addFav: (character) =>{
            dispatch(addFav(character))

         },
         removeFav:function(id){
            dispatch(removeFav(id))
         }
      }
   }

export default connect( mapStateToProps, mapDispatchToProps)(Card);