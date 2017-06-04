import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/NotFound';
import asyncComponent from '../asyncComponent';

const Preloader = () => (<span>...</span>);

class Routes extends Component {
    static propTypes = {
        routeList: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string,
                getComponent: PropTypes.func,
            })
        ),
        onLoadRoute: PropTypes.func,
    };

    render() {
        const { routeList, onLoadRoute } = this.props;

        return (
            <Switch>
                {routeList.map(({ path, getComponent }) => {
                    const component = asyncComponent(() => getComponent().then(onLoadRoute), Preloader);
                    return (
                        <Route
                            exact
                            key={path}
                            path={path}
                            component={component}
                        />
                    );
                })}
                <Route component={PageNotFound} />
            </Switch>
        );
    }
}

export default Routes;
