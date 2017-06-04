import React from 'react';
import App from './components/App';
import Routes from './Routes';
import routeList from './routeList';

function onLoadRoute(routeModule) {
    return routeModule.default ? routeModule.default : routeModule;
}

export default () => (
    <App>
        <Routes routeList={routeList} onLoadRoute={onLoadRoute} />
    </App>
);
