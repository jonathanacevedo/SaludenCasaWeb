import React, { Component } from 'react';
import '../estilos/Footer.css';
import LogoFooter from '../imagenes/footerLogo.png';

/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

class Footer extends Component {

  render() {
    return (
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
    );
  }
}
export default Footer;