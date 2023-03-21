import React from 'react'
import s from "./History.module.css"

export default function History() {
  return (
  
  <div className={s.container}>

    <div className={s.containertexto}>

    <div className={s.titulos}>
     <h1 className={s.titulo}>Rick And Morty</h1>
     <p className={s.p}> Es una serie de televisión americana, sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty. </p>
     <p className={s.p}>Ambos pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. </p>

      <img className={s.image} src='https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg' alt='' />
     

    </div>

    </div>

  </div>
  )
}
