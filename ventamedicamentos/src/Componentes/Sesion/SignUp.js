import React, { Component } from 'react';
import '../estilos/SignUp.css';
import { Link,  withRouter} from 'react-router-dom';
import { auth } from '../../firebase';


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    resultado: ''
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const SignUpPage = ({ history }) =>
  <div>
    <h1 className="titulo">Registrarse</h1>
    <SignUpForm history={history}/>
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const {
        email,
        passwordOne,
      } = this.state;

      const {
        history,
      } = this.props;
  
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState(() => ({ ...INITIAL_STATE }));
          this.setState({
            resultado: 'Cuenta Creada Exitosamente'
          });
          //history.push('/login');
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
  
      event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
        resultado
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (

      <div className="App">
      <form className="formulario"  onSubmit={this.onSubmit}>
      <input className="campoForm"
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Nombre completo"
        />
        <input className="campoForm"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input className="campoForm"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        <input className="campoForm"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirmar Contraseña"
        />
        <button className="botonRegistro" disabled={isInvalid} type="submit">
          Registrarse
        </button>
        <div className="resultado">{resultado}
        </div>
        { error && <p>{error.message}</p> }
      </form> 
      </div>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to='/signup'>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};