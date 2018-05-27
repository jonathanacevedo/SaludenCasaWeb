import React from 'react';
import RegistroLogo from  '../imagenes/login3.png'; 


import { auth } from '../../firebase';

const SignOutButton = () =>
  <button className="boton"
    type="button"
    onClick={auth.doSignOut}>
    <img src={RegistroLogo} className="loginLogo"></img>
    <span>Cerrar Sesión</span>
  </button>
export default SignOutButton;