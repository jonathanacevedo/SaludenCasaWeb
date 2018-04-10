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

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };


  handleMensaje(e){
    if(e.target.id === "comprar"){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  render() {
    const { titulo, items } = this.props;  //const titulo = this.props.titulo;
    return (
      <div className="App">
        <header className="Header">
          <ul className="linea">
            <Link to={'/login'}>
            <button className="boton">
            <img src={LoginLogo} className="loginLogo"></img>
              Iniciar Sesión
            </button>
            </Link>
            <Link to={'/registro'}>
            <button className="boton">
              <img src={RegistroLogo} className="loginLogo"></img>
              <a>Registrarse</a>
            </button>
            </Link>
            <button className="boton">
              <img src={CarritoLogo} className="loginLogo"></img>
              <a>Carro de compras</a>
            </button>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menu">
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>
      </div>
    );
  }
}

export default Header;