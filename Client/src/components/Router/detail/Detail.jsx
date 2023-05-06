import React, {useState, useEffect} from 'react';
import s from "./Detail.module.css"
import { useParams, useNavigate } from 'react-router-dom';


export default function Detail(props) {
  
const{detailId} = useParams()
const[character, setCharacter] = useState({})
const navigate = useNavigate()

useEffect(() => {
  fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
   return setCharacter({});
}, [detailId]);

  return (

  <div className={s.fondo}>
    <div className={s.container}> 
      <button onClick={() => navigate(-1)} className={s.button}>Back</button>
    
     <div className={s.containerdata}>
     <h1>Name: <span className={s.value}>{character.name}</span></h1>
     <h1>Status: <span className={s.value}>{character.status}</span></h1>
     <h1>Species: <span className={s.value}>{character.species}</span></h1>
     <h1>Gender: <span className={s.value}>{character.gender}</span></h1>
     <h1>Origin: <span className={s.value}>{character.origin?.name}</span></h1>
     <h1>Location: <span className={s.value}>{character.location?.name}</span></h1>
     </div>
    <img className={s.image} src={character.image} alt="imagen" /> 
      
    </div>
  </div> 
  )
}
