import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from 'app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function renderRoot(Root) {
    render(
        <HashRouter>
            <Root />
        </HashRouter>,
        document.getElementById('root')
    );
}

renderRoot(App);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('app', () => {
        const NewApp = require('app').default;
        renderRoot(NewApp);
    });
}