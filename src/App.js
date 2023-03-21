import React, { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Tarjetas/Cards.jsx';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Forms from './components/Formulario/Forms';
import About from './components/Router/about/About';
import Detail from './components/Router/detail/Detail';
import Favorite from "./components/Router/favorite/Favorite";
import History  from "./components/Router/history/History.jsx";
import Errors from "./components/Router/Errors/Errors.jsx"


function App () {

  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  

  const userName = "lucas@henry.com";
  const password = "lucas123" ;

  function onSearch(id) {
   // console.log("ID:", id);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            const characterExist = characters.find((char) => char.id === data.id);
            if (characterExist){
              window.alert('Este personaje ya ha sido agregado.');
            }
            else{
             setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
 
    const handleClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered)
      
    }

    const login  = (userData) => {
      if(userData.userName === userName && userData.password === password ) {
        setAccess(true) 
        navigate("/home")
      }
        else{
          alert("El usuario o la contraseña no son correctos.")
        }
    }
    
    function logout() {
      setAccess(false);
      navigate("/");
    }


   /*  useEffect(() => {
      if (!access && location.pathname !== '/error') {
        navigate('/')
      }
    }, [access, navigate, location.pathname]) */

    useEffect(() => {
      if (!access && location.pathname !== '/error') {
        navigate('/');
      }
    }, [access, navigate, location.pathname]);


  return (
    <div className='App' >
      

        {location.pathname !== "/" && 
        <Nav access={access} onSearch={onSearch} logout={logout}/>}
       

    <Routes>

    <Route path="/logout" element={<Forms login={login} />} />
    <Route path="/" element={<Forms login = {login}/>}/>

      <Route path="/home" 
            element={<Cards 
              characters={characters} 
              onClose = {handleClose}
            />}/>

      <Route  path="/about" element = {<About/>}/>

      <Route  path="/history" element = {<History/>}/>

      <Route  path="/favorite" element = {<Favorite/>}/>

      

      <Route path="detail/:detailId" element={<Detail />}/>

      <Route path='*' element={<Errors />} />

    </Routes>
        
        

      </div>
  )
}

export default App
