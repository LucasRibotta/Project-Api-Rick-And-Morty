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

   return (

      <div className = {style.searchContainer}>
      <form  onSubmit = {handleSubmit}>
      <input type="search" placeholder='Search' value={character} onChange = {handleInputChange} />
      <button type='submit'>Add</button>
      </form>
    </div>
   );
}
