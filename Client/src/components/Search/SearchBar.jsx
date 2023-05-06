import React, { useState } from 'react'
import style from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState ("");

   const handleInputChange = (event) => {
      setCharacter(event.target.value);
   }

   const handleSubmit =  (event) => {
      event.preventDefault();
      props.onSearch(Number(character));
      setCharacter("");
      
   }

   const handleRandomClick = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      props.onSearch(randomNumber);
   }

   return (

      <div className={style.inputContainer}>
      <form  onSubmit = {handleSubmit}>

      <div className={style.buttonContainer}>
      <input className={style.search} type="search" placeholder='Search' value={character} onChange = {handleInputChange} />
      <button className={style.boton} type='submit'>ADD</button>
   
      <button className={style.boton} type='button' onClick={handleRandomClick}>Random</button>
    </div>
      </form>
    </div>
   );
}
