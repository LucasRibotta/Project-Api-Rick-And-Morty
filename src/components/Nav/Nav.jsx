import React from 'react'
import NavBar from './navBar/NavBar'
import SearchBar from './Search/SearchBar'
import style from './Nav.module.css'

export default function Nav(props) {
  const {onSearch} = props
  
    return (
      <div className = {style.navContainer}>
          <NavBar/>
          <SearchBar onSearch ={onSearch}/>
      </div>
    )
  }
  
  
  

