/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reactotronConfig from './reactotron.config';

import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import reducer from './src/reducer';


const store = createStore(reducer, {}, compose(reactotronConfig.createEnhancer()));

const EntryPoint = props => {

    console.log(store.getState());

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => EntryPoint);
