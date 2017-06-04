import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/NotFound/index';
import ModuleMain from '../modules/main/index';
import ModuleAbout from '../modules/about/index';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ModuleMain} />
                <Route exact path="/about" component={ModuleAbout} />
                <Route component={PageNotFound} />
            </Switch>
        );
    }
}

export default Routes;
