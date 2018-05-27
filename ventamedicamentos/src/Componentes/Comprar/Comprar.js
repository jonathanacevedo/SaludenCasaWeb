import React, { Component } from 'react';
import { db } from '../../firebase/firebase';
import './comprar.css';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';



class Comprar extends Component {

  constructor(){
    super();
    this.state = {
      productos: []
    };
    this.database = db.ref().child('productos'); 
  }

  componentDidMount() {
    var prueba = [];
    this.database.on('value', snap => {
      snap.forEach((item) => {
        let producto = {
          id: item.key,
          nombre: item.val().nombre,
          categoria: item.val().categoria,
          caracteristicas: item.val().caracteristica,
          descripcion: item.val().descripcion,
          volumen: item.val().volumen,
          foto: item.val().foto
        };
        prueba = [producto].concat(prueba);
        this.setState({
          productos: [producto].concat(this.state.productos)
        });
      })
    });
    this.setState({
      productos: prueba
    });
  }
  
  render() {
    return (
      <div> 
        <div className="titulo"><strong>Bienvenido</strong></div>
        <table align="center" className="tabla">
          <tbody>
            {
              this.state.productos.map(producto => 
                <tr key={producto.id}>
                  <td className="tdd"><div>Nombre del producto: {producto.nombre}</div>
                      <div>Categoria: {producto.categoria}</div>
                      <div>Caracteristicas: {producto.caracteristicas}</div>
                      <div>Descripción:{producto.descripcion}</div>
                      <div>Volumen: {producto.volumen}</div>
                      <img className="imagen" src={producto.foto}/>
                  </td>
                  {/* <td>{producto.categoria}</td>
                  <td>{producto.caracteristicas}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.volumen}</td> 
                  <td><img className="imagen" src={producto.foto}/></td>*/}
                </tr>
              )
            }
            </tbody>
            </table>
      </div>
    );
  }
}


export default Comprar;