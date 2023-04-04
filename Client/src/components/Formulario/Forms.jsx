import React, {useState} from 'react'
import { validation } from './validation'
import s from "./Forms.module.css"

export default function Forms(props) {
    const[userData, SetUserData] = useState({
        userName: "",
        password: ""
    
      });
    
        const [errors, setErrors] = useState({
          username: "",
          password: ""
      
        });

        const handleInputChange = (e) =>{
            SetUserData({
              ...userData,
              [e.target.name] : e.target.value
            });
            setErrors(validation ({
              ...userData,
              [e.target.name] : e.target.value
            }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault()
            props.login(userData)
            
          };


    return(
    <div className={s.contenedorPrincipal}>

    <div className={s.container}>

     <div className={s.image}>

       <div className={s.login}>

        <form onSubmit={handleSubmit} >
              

        <br />

          <div className={s.user}>
            <label>UserName: </label>
            <input 
            name="userName"
            type="text"
            value={userData.userName}
            onChange={handleInputChange}
            className={errors.username && s.warning}
            />
            {errors.username ?  <p style={{color:"red"}}>{errors.password}</p> : null}
          </div>

          <div className={s.password}>
            <label>Password:  </label>
            <input 
            name='password'
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && s.warning}
            />
           {errors.password ?  <p style={{color:"red"}}>{errors.password}</p> : null}
          </div>

            <br />

            <button type="submit" value="enviar" name="submit" className={s.boton}>Login</button>

            </form>

            </div>

            

        </div>

     </div>
     </div>
  )
}
