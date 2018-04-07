import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider} from 'react-redux';

//Rutas
import AppRoutes from './routes';

//Assets
import './index.css';
import App from './Componentes/App';
import configureStore from './state/store'


const store=configureStore({ });

render(
    <Router>
    <Provider store={store}>
        <AppRoutes />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
