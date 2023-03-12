import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Tarjetas/Cards.jsx';

function App () {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    console.log("ID:", id);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            const characterExist = characters.find((char) => char.id === data.id);
            if (characterExist){
              window.alert('Este personaje ya ha sido agregado.');
            }
            else{
             setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
 
    const handleClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered)
      
    }

  return (
    <div className='App' >
        <Nav onSearch={onSearch}/>
        <h2 className='h1'>Rick And Morty</h2>
        <Cards 
          characters={characters} 
          onClose = {handleClose}
        />

      </div>
  )
}

export default App
