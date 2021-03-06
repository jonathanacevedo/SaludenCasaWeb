import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

//Rutas
import AppRoutes from './routes';

//Assets
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>, document.getElementById('root'));
registerServiceWorker();