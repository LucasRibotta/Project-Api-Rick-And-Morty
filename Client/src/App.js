import React, { useEffect, useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
/* import Cards from './components/Tarjetas/Cards.jsx'; */
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Forms from './components/Formulario/Forms';
import About from './components/Router/about/About';
import Detail from './components/Router/detail/Detail';
import Favorite from "./components/Router/favorite/Favorite";
import History  from "./components/Router/history/History.jsx";
import Errors from "./components/Router/Errors/Errors.jsx";
import Home from './components/Router/Home/Home';
import axios from 'axios';


function App () {

  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
 

  const onSearch = async (id) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      const char = characters.find((char) => char.id === id)
      if(char) return alert('Este personaje ya ha sido agregado.')
      setCharacters([...characters, data])
    } catch (error) {
      alert(error.message)
    }
  }
 
    const handleClose = (id) => {
      const filtered = characters.filter((char) => char.id !== Number(id));
      setCharacters(filtered)
      
    }

    const login = async (userData)=> {
      try {
        const { userName, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        axios(URL + `?email=${userName}&password=${password}`).then(({ data }) => {
           const { access } = data;
           setAccess(data);
           access && navigate('/home');
        });
        
      } catch (error) {
        alert(error.message)
      }
   }
    
    function logout() {
      setAccess(false);
      navigate("/");
    }



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
      <Route  path="/home" 
            element={<Home 
              characters={characters} 
              onClose = {handleClose}
              
              />}/>
              
      <Route  path="/about" element = {<About/>}/>
      <Route  path="/history" element = {<History/>}/>
      <Route  path="/favorite" element = {<Favorite/>}/>
      <Route path="*" element={<Errors />} />       
      <Route path="detail/:detailId" element={<Detail />}/>

    </Routes>
             
   </div>
  )
}

export default App
