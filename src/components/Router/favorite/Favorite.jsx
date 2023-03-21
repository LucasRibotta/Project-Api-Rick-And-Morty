import React from 'react'
import { connect } from 'react-redux'
import style from './Favorite.module.css'

function Favorite({myFavorites}) {
  return (
    <div className={style.contenedor}>
    
     {
      myFavorites?.map((character) =>(
        <div className={style.card}>
          <img src={character.image} className={style.image} alt={character.name} />
          <h2>{character.name}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          
        </div>
      
      ))
     }
    
      
    </div>
  )
}

export function mapStateToProps(state){
  return{
    myFavorites: state.myFavorites
  }
}

export default connect (mapStateToProps)(Favorite)