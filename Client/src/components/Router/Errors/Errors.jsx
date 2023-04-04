import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Errors.module.css"


const Error = () => {
    const navigate = useNavigate();
   
 
    return (
      <div className={style.errorContainer}>
        <h1 className={style.errorTitle}>Error 404</h1>
        <p className={style.errorMessage}>La página que estás buscando no existe.</p>
        <button onClick={() => navigate('/')}>Volver a inicio de sesión</button>
      </div>
    );
  };
 
  
  export default Error;