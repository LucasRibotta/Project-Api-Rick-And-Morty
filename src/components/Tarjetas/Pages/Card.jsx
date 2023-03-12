import React from 'react'
import style from './Card.module.css'

export default function Card({character, onClose}) {
   const {id, name, species, gender, image} = character;
      return (
         <div className={style.card} >

            <button className='delete-btn' onClick={() => onClose(id)}>X</button>

            <div className= {style.card_imageContainer} >
            <img  className={style.card__image} src= {image} alt={name} />

            </div>

            <div className={`${style.card_textContainer} ${style.hiddenText} `}>
            <h2 className={style.card_title}> {name} </h2>
            <h2 className={style.card__text}> {species} </h2>
            <h2 className={style.card__text}> {gender} </h2>
            </div>

         </div>
      );
   }
