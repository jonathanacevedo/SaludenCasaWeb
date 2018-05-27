import React, { Component } from 'react';
import { db, sto } from '../../firebase/firebase';
import firebase from 'firebase';
import './comprar.css';
import Icono from '../imagenes/predefinida.png';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
    nombre: '',
    categoria: '',
    descripcion: '',
    caracteristicas: '',
    volumen: '',
    imagen: Icono,
    uploadValue: 0
};

class Comprar extends Component {

  constructor(){
    super();
    this.database = db.ref().child('productos')
    this.onChange = this.onChange.bind(this);
    this.state = { ...INITIAL_STATE };
  }

  onChange(e){
    this.setState({
      nombreL: e.target.value
    });
}

handleOnChange (event) {
  const file = event.target.files[0]
  if(file){
   const storageRef = sto.ref('imagenes/'+file.name)
  const task = storageRef.put(file)
  task.on('state_changed', (snapshot) => {
    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    this.setState({
      uploadValue: percentage
    });
    console.log('Subido')
  }, (error) => {
    console.error(error.message)
  }, () => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      this.setState({
      imagen: url
    })
    })
   
  })
}
}


 onSubmit = (event) => {
  const {
      nombre,
      categoria,
      descripcion,
      caracteristicas,
      volumen,
      imagen,
      uploadValue
    } = this.state;

    const {
      history,
    } = this.props;

   this.database.push({
    nombre: nombre,
    categoria: categoria,
    descripcion: descripcion,
    caracteristica: caracteristicas,
    volumen: volumen,
    foto: imagen,
   }).then (()=> {
    this.setState(() => ({ ...INITIAL_STATE }));
    alert('Producto registrado exitosamente');
   });
    event.preventDefault();
}
  
  render() {
    const {
      nombre,
      categoria,
      descripcion,
      caracteristicas,
      volumen,
      imagen,
      uploadValue
    } = this.state;
    return (
      <div className="App">
      <form className="formulario"  onSubmit={this.onSubmit}>
      <input className="campoForm"
          value={nombre}
          type="text"
          placeholder="Nombre Producto"
          onChange={event => this.setState(byPropKey('nombre', event.target.value))}/>
          <select className="campoForm" onChange={event => this.setState(byPropKey('categoria', event.target.value))} value={categoria}>
          <option value="" disabled selected>Categoria</option>
          <option value="niños">Niños</option>
          <option value="mamas">Mamás</option>
          <option value="adultos">Adultos</option>
          <option value="pastillas">Pastillas</option>
          <option value="pomadas">Pomadas</option>
          <option value="jarabes">Jarabes</option>
          </select>
        <input className="campoForm"
          value={descripcion}
          type="text"
          onChange={event => this.setState(byPropKey('descripcion', event.target.value))} placeholder="Descripcion" />
          <input className="campoForm"
          value={caracteristicas}
          type="text"
          onChange={event => this.setState(byPropKey('caracteristicas', event.target.value))} placeholder="Caracteristicas" />
          <input className="campoForm"
          value={volumen}
          type="text"
          onChange={event => this.setState(byPropKey('volumen', event.target.value))} placeholder="Volumen" />
          <input type='file' className="campoForm" onChange={this.handleOnChange.bind(this)}/>
          <br />
          <progress value={this.state.uploadValue} max='100'>
          {this.state.uploadValue} %
          </progress>
          <br />
          <br />
          <div><img className="imagenSubida" src={this.state.imagen} alt="Imagen" width="150" height="150"/></div>
          <button className="botonRegistro" type="submit">
          Ingresar Producto
        </button>
      </form> 
      </div>      
    );
  }
}


export default Comprar;