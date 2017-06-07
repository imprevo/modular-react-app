import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from 'app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const reducers = {
    example: (state = {}) => state,
};
const store = configureStore(reducers);
console.log('store', store.getState());

function renderRoot(Root) {
    render(
        <Provider store={store}>
            <HashRouter>
                <Root />
            </HashRouter>
        </Provider>,
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