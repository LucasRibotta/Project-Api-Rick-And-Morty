import React from 'react'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
      <div className={style.navBarContainer}>
          <ul className={style.navBarList}>
              <li className={style.navBarContainerLink}>Home</li>
              <li className={style.navBarContainerLink}>About</li>
              <li className={style.navBarContainerLink}>Favorite</li>
              <li className={style.navBarContainerLink}>History</li>
              <li className={style.navBarContainerLink}>Galery</li>
          </ul>
      </div>
    )
  }

  export default NavBar