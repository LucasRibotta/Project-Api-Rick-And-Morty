import React from 'react';
import styled from 'styled-components'
import s from './Home.modules.css'


const Container = styled.div`
background-color:grey;
height: 100%;
width: 100%;
`;




function Home(){
    return (
        <Container>
            <div className={s.contenedor}>
            <h1>BIENVENIDOS A LA APP DE RICK AND MORTY</h1>
            </div>
            <img src="https://i.pinimg.com/originals/a4/f7/79/a4f779d4d3b7f30a6b597e324667942f.gif" alt="rickymorty" />
            <button></button>
        </Container>
    )
}

export default Home;


