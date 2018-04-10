import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './componentes/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';


    render(
        <Router>
            <AppRoutes />
        </Router>, document.getElementById('root'));
registerServiceWorker();
