import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function renderRoot(Root) {
    render(<Root />, document.getElementById('root'));
}

renderRoot(App);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./app/App', () => {
        const NewApp = require('./app/App').default;
        renderRoot(NewApp);
    });
}