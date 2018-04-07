//Dependencias

import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import configureStore from './state/store';
//Componentes

import App from './Componentes/App.js';
import Principal from './Componentes/Principal/Principal.js';
import Productos from './Productos.js';
import Consultar from './Componentes/Consultar/Consultar.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Page404 from './Componentes/Page404/Page404.js';

import Registro from './Componentes/SignUp.js';

import IniciarSesion from './Componentes/SignUp.js';
    


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={ Principal } />
        <Route path="/productos" component={ Productos } />
        <Route path="/consultar" component={ Consultar } />
        <Route path="/contacto" component={ Contacto } />
        <Route path="/registro" component={ Registro } />
        <Route path="/login" component={ IniciarSesion } />
        <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;
 
