import React from 'react';
import s from "./About.module.css";


export default function About(props) {
  return (
  <div className={s.mainContainer}>
    <div className={s.container}>
      <h1>Hola, mi nombre es Lucas Ribotta</h1>
      
    <div>
      <img className={s.miimagen} src='miperfil.jpg' alt='yo' />
    </div>  

      <h2>Bienvenidos a mi Aplicación de Rick and Morty</h2>
      <p className={s.p}>En esta App se mostraran todos los personajes de Rick and Morty. </p> 
      <p className={s.p}> Podras acceder a los detalles de cada personajes haciendo click en las cartas que busques.</p>
      <p className={s.p}>Guardarlas en tus favoritos y navegar a History donde se contara un breve resumen de la historia de esta serie.  </p>

    </div>
  </div>
  )
}
