import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import { DB_CONFIG } from './config';
import './SignUp.css';



  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

  const INITIAL_STATE = {
      nombre: '',
      categoria: '',
      descripcion: '',
      caracteristicas: '',
      volumen: ''
  };

class App extends Component {
  constructor() {
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

  componentDidMount(){
    //          onChange={event => this.setState(byPropKey('username', event.target.value))}
    console.log(this.state.nombreL);

  }

   onSubmit = (event) => {
    const {
        nombre,
        categoria,
        descripcion,
        caracteristicas,
        volumen
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
      foto: 'https://firebasestorage.googleapis.com/v0/b/insertarprod.appspot.com/o/7501108767527_1.jpg?alt=media&token=862a2019-de7a-4bb2-9eda-2b3d637c9a5a',
     }).then (()=> {
      alert('Producto registrado exitosamente');
      this.setState(() => ({ ...INITIAL_STATE }));
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
        foto
      } = this.state;
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Registro de productos
        </p>
      <form className="formulario"  onSubmit={this.onSubmit}>
      <input className="campoForm"
          value={nombre}
          type="text"
          placeholder="Nombre Producto"
          onChange={event => this.setState(byPropKey('nombre', event.target.value))}/>
        <input className="campoForm"
          value={categoria}
          type="text"
          onChange={event => this.setState(byPropKey('categoria', event.target.value))} placeholder="Categoria" />
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

        <button className="botonRegistro" type="submit">
          Ingresar Producto
        </button>
      </form> 

      </div>
    )
  }

  }



  

export default App;
