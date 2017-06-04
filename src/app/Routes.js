import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/NotFound';
import ModuleMain from 'modules/main';
import ModuleAbout from 'modules/about';

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
