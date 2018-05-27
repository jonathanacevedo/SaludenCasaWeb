import React, { Component } from 'react';
import Banner from '../imagenes/farmacia1.png';
import icono1 from '../imagenes/icono1.png';
import icono2 from '../imagenes/icono2.png';
import icono3 from '../imagenes/icono3.png';

import './principal.css';


class Principal extends Component {
  render() {
    return (
      <div className="App">
          <img src={Banner} className="banner" alt="Banner" ></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1">
                <img src={icono1} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
                <div className="container2">
                <img src={icono2} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
                <div className="container3">
                <img src={icono3} className="icono" alt="Imagen" ></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}


export default Principal;