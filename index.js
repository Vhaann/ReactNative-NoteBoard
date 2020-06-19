import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reactotronConfig from './reactotron.config';
import thunk from 'redux-thunk';

import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import reducer from './src/reducer';

const store = createStore(reducer, {}, compose(reactotronConfig.createEnhancer(), applyMiddleware(thunk)));

const EntryPoint = props => {

    console.log('store state', store.getState());

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => EntryPoint);
