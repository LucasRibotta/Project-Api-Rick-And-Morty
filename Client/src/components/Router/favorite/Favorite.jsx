import React, {useState} from 'react'
import { connect } from 'react-redux'
import style from './Favorite.module.css'
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from "../../../redux/actions"
import Card from '../../Tarjetas/Pages/Card';

function Favorite({myFavorites}) {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));

      default:
        break;
    }
  };

  return (
    <div className={style.contenedor}>

      <div className={style.filterOrderContainer}> 
        <div className={style.orderContainer}> 
          <label htmlFor="order">Order:</label> 
        <select name="order" id="order" onChange={handleClick}>
        <option className={style.ascendente} value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
        </select>
        </div>

        <div className={style.filterContainer}>
          <label htmlFor="filter">Filter:</label>
        <select name="filter" id="filter" onChange={filterCards}>
        <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
    </div>
    
    {
    myFavorites?.map((character) => (
      <div key={character.id} className={style.contenedorcard}>
        {isOpen && <Card className={style.card} character={character} onClose={() => setIsOpen(false)} />}
      </div>
      ))
     }
    
      
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorite);