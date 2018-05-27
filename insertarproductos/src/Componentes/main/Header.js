import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../estilos/Header.css';
import { Link } from 'react-router-dom';

import Logo from  '../imagenes/logo2.png'; 
import LoginLogo from  '../imagenes/login2.png'; 
import RegistroLogo from  '../imagenes/registrar.png'; 
import CarritoLogo from  '../imagenes/carrito2.png'; 
import Navegacion from './Navegacion.js';
import SignOutButton from '../Sesion/SignOut.js';


class Header extends Component {


  constructor(){
    super();
  }

  render() {
    const emailUsuario="emaildePrueba";
    return (
       <div className="App">
          <div className="emailUsuario">{this.props.authUser==null ? '' : 'Logueado como: '+this.props.authUser.email}</div>
          <Navegacion authUser={this.props.authUser}/>
      </div>
    );
  }
}

export default Header;