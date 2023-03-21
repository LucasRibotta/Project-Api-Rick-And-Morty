import React from 'react'
import Card from './Pages/Card'
import style from './Cards.module.css'



function Cards(props) {
   const {characters: cardCharacters, onClose} = props;
   
   return <div className={style.card}>

      <div className={style.cards}>
      {cardCharacters.map((character) =>(
         <Card key={character.id} character={character} onClose={onClose}/>
      ))}
      
      </div>
   </div>;
}

export default Cards;