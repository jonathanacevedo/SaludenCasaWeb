import React, { Component } from 'react';
import './estilos/SignUp.css';
import { Link,  withRouter} from 'react-router-dom';
import { auth } from '../firebase';




const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    error: null,
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
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < 17; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    var password=pass;
    const {
        username,
        email,
        passwordOne,
      } = this.state;

      const {
        history,
      } = this.props;

      auth.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push('/');
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
        event.preventDefault();

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        console.log("nnnn");
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        password,
        error,
      } = this.state;

      const isInvalid =

      email === '';

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
          value={password}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        <input className="campoForm"
          value={password}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirmar Contraseña"
        />
        <button className="botonRegistro" disabled={isInvalid} type="submit">
          Registrarse
        </button>
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
