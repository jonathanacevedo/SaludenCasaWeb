//Dependencias

import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

//Componentes

import App from './componentes/App.js';
import Principal from './componentes/Principal/Principal.js';
import Page404 from './componentes/Page404/Page404.js';


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={ Principal } />
        <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;
 