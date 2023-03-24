import React from 'react';
import style from "./Home.module.css";
import Cards from '../../Tarjetas/Cards';

function Home({ characters, onClose }) {
    return (
        
        <div className={style.contenedorimagen}>
         { <img className={style.image} src="https://i.pinimg.com/originals/1a/ae/0d/1aae0de5b030ac09a55ba64504da29cf.gif" alt="portal" />}
         
        <Cards characters={characters} onClose={onClose} />
        </div>
       
        );
  }
  
  export default Home;
