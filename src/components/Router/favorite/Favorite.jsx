import React from 'react'
import { connect } from 'react-redux'
import style from './Favorite.module.css'
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from "../../../redux/actions"
import Card from '../../Tarjetas/Pages/Card';

function Favorite({myFavorites}) {

  const dispatch = useDispatch();

  const handleOrderChange = (e) =>{
    dispatch(orderCards(e.target.value));
  }

  const handleFilterChange = (e) =>{
    dispatch(filterCards(e.target.value));
    console.log(filterCards)
  }

  return (
    <div className={style.contenedor}>

      <div className={style.filterOrderContainer}> 
        <div className={style.orderContainer}> 
          <label htmlFor="order">Order:</label> 
        <select name="order" id="order" onChange={handleOrderChange}>
        <option className={style.ascendente} value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
        </select>
        </div>

        <div className={style.filterContainer}>
          <label htmlFor="filter">Filter:</label>
        <select name="filter" id="filter" onChange={handleFilterChange}>
        <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
    
    {
      myFavorites?.map((character) =>(
        <div key={character.id} className={style.contenedorcard}>
          <Card className={style.card} character={character} onClose={() => {}} />
        </div>
      ))
     }
    
      
      </div>
  )
}

export function mapStateToProps(state){
  return{
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  }
}

export default connect (mapStateToProps)(Favorite)