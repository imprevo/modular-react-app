import React from 'react';
import App from './components/App';
import Routes from './Routes';
import routeList from './routeList';

function onLoadRoute(routeModule) {
    return routeModule.default ? routeModule.default : routeModule;
}

export default () => (
    <App routeList={routeList}>
        <Routes routeList={routeList} onLoadRoute={onLoadRoute} />
    </App>
);
