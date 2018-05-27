import React, { Component } from 'react';
import './estilos/App.css';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

//Componentes
import Header from './main/Header.js';
import Body from './main/Body.js';
import Footer from './main/Footer.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      authUser: null,
    };
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Header authUser={this.state.authUser} />
          <Body body={children} />
          <Footer />
      </div>
    );
  }
  
componentDidMount() {
  firebase.auth.onAuthStateChanged(authUser => {
    authUser
      ? this.setState(() => ({ authUser }))
      : this.setState(() => ({ authUser: null }));
  });
}
}

export default App;