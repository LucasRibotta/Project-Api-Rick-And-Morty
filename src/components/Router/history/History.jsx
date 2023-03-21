import React from 'react'
import s from "./History.module.css"

export default function History() {
  return (
  
  <div className={s.container}>

    <div className={s.containertexto}>

    <div className={s.titulos}>
     <h1 className={s.titulo}>Rick And Morty</h1>
     <p className={s.p}> Es una serie animada de televisión que sigue las aventuras de un científico loco llamado Rick Sánchez y su nieto, Morty Smith, mientras viajan a través de dimensiones y planetas alternativos. La serie se caracteriza por su humor negro, su violencia gráfica y su exploración de temas filosóficos y científicos complejos, todo ello con un trasfondo de drama familiar. La serie ha ganado una gran cantidad de seguidores debido a su humor irreverente y su ingeniosa exploración de temas de ciencia ficción y cultura pop. </p>

      <img className={s.image} src='https://free4kwallpapers.com/uploads/originals/2022/06/08/rick-n-morty-wallpaper.jpg' alt='' />
     

    </div>

    </div>

  </div>
  )
}
