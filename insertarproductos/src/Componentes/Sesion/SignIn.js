import React, { Component } from 'react';
import '../estilos/SignUp.css';
import { Link,  withRouter} from 'react-router-dom';
import { auth } from '../../firebase';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const SignInPage = ({ history }) =>
  <div>
    <h1 className="titulo">Ingresar Administrador</h1>
    <SignInForm history={history}/>
  </div>

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        //this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/ingresar');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="App">
      <form className="formulario"  onSubmit={this.onSubmit}>
        <input className="campoForm"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input className="campoForm"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Contraseña"
        />
        <button className="botonIngresar" disabled={isInvalid} type="submit">
          Ingresar
        </button>
        { error && <p>{error.message}</p> }
      </form>
      </div>
    );
  }
}
const SignInLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to='/signin'>Sign In</Link>
  </p>
export default withRouter(SignInPage);
export {
  SignInForm,
};