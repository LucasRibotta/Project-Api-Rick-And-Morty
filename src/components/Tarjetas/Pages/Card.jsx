import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import {addFavorites, deleteFavorites} from "../../../../src/redux/actions";
import { connect } from 'react-redux';


function Card({character, onClose, deleteFavorites, addFavorites, myFavorites}) {
   const {id, name, image} = character;

   const[isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         deleteFavorites(id)
      }else{
         setIsFav(true)
         addFavorites(character)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

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
         addFavorites: (character) =>{
            dispatch(addFavorites(character))

         },
         deleteFavorites:function(id){
            dispatch(deleteFavorites(id))
         }
      }
   }

export default connect( mapStateToProps, mapDispatchToProps)(Card);