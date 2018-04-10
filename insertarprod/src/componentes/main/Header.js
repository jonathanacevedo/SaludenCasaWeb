import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../estilos/Header.css';
import { Link } from 'react-router-dom';
import Logo from  '../imagenes/logo2.png'; 
import LoginLogo from  '../imagenes/login2.png'; 
import RegistroLogo from  '../imagenes/registrar.png'; 
import CarritoLogo from  '../imagenes/carrito2.png'; 

class Header extends Component {

  constructor(){
    super();
    this.state={
      count: 0
    }

    this.handleMensaje = this.handleMensaje.bind(this);
  }
  handleMensaje(e){
    if(e.target.id === "comprar"){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <ul className="linea">
            <button className="boton">
            <img src={LoginLogo} className="loginLogo"></img>
              Iniciar Sesión
            </button>
            <button className="boton">
              <img src={RegistroLogo} className="loginLogo"></img>
              <a>Registrarse</a>
            </button>
            <button className="boton">
              <img src={CarritoLogo} className="loginLogo"></img>
              <a>Carro de compras</a>
            </button>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Ingreso de Productos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menu">
          <li><button id="principal" className="boton sobre">Solo las personas logueadas (como administrador) podrán ingresar productos</button></li>

           </ul>
        </header>
      </div>
    );
  }
}

export default Header;