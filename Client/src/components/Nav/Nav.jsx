import React from 'react'
import SearchBar from '../Search/SearchBar'
import style from './Nav.module.css'
import {NavLink, useLocation} from "react-router-dom"

const NavLi = ({to, children, ...props}) => {
  return(
    <NavLink 
      {...props}
      to = {to}
      className={({isActive}) => isActive ? style.active : style.disable}
    >
        {children}   
    </NavLink>

  )
}


export default function Nav(props) {
  const {onSearch} = props
  const location = useLocation()

  const isCharacterPage = location.pathname === '/character'

    return (
      <div className = {style.navContainer}>
        <h1 className={style.h1}>Rick and Morty</h1>
      <div className={style.contenedorfrist}>
      <ul className={style.contenedorLista}>

          <li className={style.lista} >
            <NavLi to="/home">Home</NavLi>
          </li>

          <li className={style.lista} >
            <NavLi to="/character">Character</NavLi>
          </li>

          <li className={style.lista} >

            <NavLi to="/about">About</NavLi>
          </li>

          <li className={style.lista} >
            <NavLi to="/favorite">Favorite</NavLi>
          </li>

          <li className={style.lista} >
            <NavLi to="/history">History</NavLi>
          </li>
 
        </ul>

        <div className={style.logoutContainer} >
          {props.access && <button className={style.logoutButton} onClick={props.logout}>Logout</button>}
          </div>

        </div>
          {isCharacterPage && <SearchBar  onSearch={onSearch} />}
      </div>
    )
  }
  
  
  

