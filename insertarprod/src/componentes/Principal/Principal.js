import React, { Component } from 'react';
import Banner from '../imagenes/farmacia1.png';
import icono1 from '../imagenes/icono1.png';
import icono2 from '../imagenes/icono2.png';
import icono3 from '../imagenes/icono3.png';
import { DB_CONFIG } from '../config';
import firebase from 'firebase';
import './principal.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
    nombre: '',
    categoria: '',
    descripcion: '',
    caracteristicas: '',
    volumen: '',
    imagen: ''
};

class Principal extends Component {

  constructor(){
    super();
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('productos')
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
  const storageRef = firebase.storage().ref('imagenes/'+file.name)
  const task = storageRef.put(file)

  task.on('state_changed', (snapshot) => {
    console.log('Subido')
  }, (error) => {
    console.error(error.message)
  }, () => {
    console.log('Link: '+task.snapshot.downloadURL)
    this.setState({
      imagen: task.snapshot.downloadURL
    })
  })
}


componentDidMount(){
  console.log(this.state.nombreL);
}

 onSubmit = (event) => {
  const {
      nombre,
      categoria,
      descripcion,
      caracteristicas,
      volumen,
      imagen
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
      imagen
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
          <input type='file' onChange={this.handleOnChange.bind(this)}/>
          <br />
          <img src={this.state.imagen} />
        <button className="botonRegistro" type="submit">
          Ingresar Producto
        </button>
      </form> 
      </div>      
    );
  }
}


export default Principal;