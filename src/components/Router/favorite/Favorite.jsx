import React from 'react'
import { connect } from 'react-redux'


function Favorite({myFavorites}) {
  return (
    <div>
     <h2>My Favorites</h2>
     {
      myFavorites?.map((character) =>(
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
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