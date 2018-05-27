import React, { Component } from 'react';
import '../estilos/Body.css';
import PropTypes from 'prop-types';


/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

class Body extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const { body } = this.props;
    return (
      <div>
        {body }
      </div>
    );
  }
}


export default Body;