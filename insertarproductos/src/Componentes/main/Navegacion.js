import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Sesion/SignOut.js';
import Logo from  '../imagenes/logo2.png'; 
import LoginLogo from  '../imagenes/login2.png'; 
import RegistroLogo from  '../imagenes/registrar.png'; 
import CarritoLogo from  '../imagenes/carrito2.png'; 

const Navegacion = ( { authUser } ) => 
<div>
    { authUser
    ? <NavegacionLogin />
    : <NavegacionUn />
    }
</div>
const NavegacionLogin = () =>
<header className="Header">
          <ul className="linea"> 
          <Link to={'/login'}><SignOutButton className="boton"/></Link>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Manejo de Productos</a></th>
              </tr>
            </tbody>
          </table>
        <ul className="menu">
          <Link to={'/ingresar'}><li><button id="comprar" className="boton sobre"> Ingresar Producto </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
        </ul>
        </header>
const NavegacionUn = () => 
<header className="Header">
          <ul className="linea">
            <Link to={'/login'}>
            <button className="boton">
            <img src={LoginLogo} className="loginLogo"></img>
              Iniciar Sesión de Administrador
            </button>
            </Link>
          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logo"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Manejo de Productos</a></th>
              </tr>
            </tbody>
          </table>
            <ul className="menu">
          <Link to={'/'}><li><button id="principal" className="boton sobre">Iniciar Sesión</button></li></Link>
           </ul> 
        </header>

export default Navegacion;