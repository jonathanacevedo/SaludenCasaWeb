import React, { Component } from 'react';
<<<<<<< HEAD
import './estilos/SignUp.css';
=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
import { Link,  withRouter} from 'react-router-dom';
import { auth } from '../firebase';


<<<<<<< HEAD


=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

const SignUpPage = ({ history }) =>
  <div>
<<<<<<< HEAD
    <h1 className="titulo">Registrarse</h1>
=======
    <h1>SignUp</h1>
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
    <SignUpForm history={history}/>
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;

      const {
        history,
      } = this.props;
  
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState(() => ({ ...INITIAL_STATE }));
<<<<<<< HEAD
          history.push('/');
=======
          history.push('/comprar');
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
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
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
<<<<<<< HEAD

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
        { error && <p>{error.message}</p> }
      </form> 
      </div>
=======
      <form onSubmit={this.onSubmit}>
      <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
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