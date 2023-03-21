import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({character, onClose}) {
   const {id, name, image} = character;
      return (
         <div className={style.card} >

            <button type="button" className={style.deleteButton} onClick={() => onClose(id)}>X</button>

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
