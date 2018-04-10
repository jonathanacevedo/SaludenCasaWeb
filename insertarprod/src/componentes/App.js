import React, { Component } from 'react';
import './estilos/App.css';
import firebase from 'firebase';
import { DB_CONFIG } from './config';
import './estilos/SignUp.css';
import Header from './main/Header.js';
import Body from './main/Body.js';
import Fondo from './main/Fondo.js';
import Footer from './main/Footer.js';
import PropTypes from 'prop-types';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
render() {
  const { children } = this.props;
    return (
       <div className="App">
          <Header titulo="Principal" />
          <Body body={children}/>
          <Footer />
      </div>
    )
  }
  } 

export default App;
