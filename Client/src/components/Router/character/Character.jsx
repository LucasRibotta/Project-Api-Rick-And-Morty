import React, {useState} from 'react';
import style from "./Character.module.css";
import Card from '../../Tarjetas/Cards';

function Character({ characters, onClose }) {
    const [favorites, setFavorites] = useState([]);

    const handleAddToFavorites = (card) => {
        setFavorites([...favorites, card]);
      };
    
      const handleRemoveFromCharacter = (card) => {
        const newCharacters = characters.filter((c) => c !== card);
        onClose(newCharacters);
      };

    return (
          <div className={style.contenedorprincipal}>
      <div className={style.contenedorimagen}>
         { <img className={style.image} src="https://i.pinimg.com/originals/1a/ae/0d/1aae0de5b030ac09a55ba64504da29cf.gif" alt="portal" />}
         
         <Card characters={characters} onClose={onClose} onAddToFavorites={handleAddToFavorites} onRemove={handleRemoveFromCharacter} />
        </div>
        </div>
       
        );
  }
  
  export default Character;
