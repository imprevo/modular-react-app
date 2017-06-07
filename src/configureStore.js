import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

function configureReducers(reducers) {
    return combineReducers(reducers);
}

function configureStore(reducers, extraArgs = {}) {
    const isDev = process.env.NODE_ENV !== 'production';
    const middlewares = [thunkMiddleware.withExtraArgument(extraArgs)];
    const rootReducer = configureReducers(reducers);
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares),
            (isDev && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
        )
    );

    return store;
}

export default configureStore;