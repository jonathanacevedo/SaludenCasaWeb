import firebase from 'firebase';
impor { DB_CONFIG } from './Productos/config';
import 'firebase/database';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoria:[],
      nombre,
      descripcion,
      caracteristicas,
      volumen,
      fotos:[]
     };
     this.Productos = firebase.initializeApp(DB_CONFIG);
     this.db=this.Productos.database().ref().child('Productos');
     checkProductos();
  }

checkProductos(){
  const {categoria} = this.state;
  const {nombre} = this.state;
  const {descripciom} = this.state;
  const {caracteristicas} = this.state;
  const {volumen} = this.state;
  const {fotos} = this.state;
  this.db.on('child_added', snap =>{
    categoria.push({
      categoriaContent= snap.val().categoriaContent;
    })
    nombre.push({
      nombreid: snap.key,
      nombreContent= snap.val().nombreContent;
    })
    descripciom.push({
      descripciomContent= snap.val().descripciomContent;
    })
    caracteristicas.push({
      caracteristicasContent= snap.val().caracteristicasContent;
    })
    volumen.push({
      volumenContent= snap.val().volumenContent;
    })
    fotos.push({
      fotosContent= snap.val().fotosContent;
    })
    this.setState({categoria},{nombre},{descripciom},{caracteristicas},{volumen},{fotos})
  });
}


  render() {
    return (
      <div className="App">
      <form className="ListaDeProductos"  onSubmit={this.onSubmit}>
      </form>
      </div>
    );
  }
}
