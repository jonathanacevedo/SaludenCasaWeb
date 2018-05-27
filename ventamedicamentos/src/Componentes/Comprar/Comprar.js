import React, { Component } from 'react';
import { db } from '../../firebase/firebase';



class Comprar extends Component {

  constructor(){
    super();
    this.database = db.ref().child('productos');
  }

  componentDidMount(){
    this.database.on('value', snap => {
      snap.forEach((item)=>{
        console.log(item.val().categoria);
      })
    });
  }


  render() {
    return (
      <div>
          Hola Comprar
      </div>
    );
  }
}


export default Comprar;