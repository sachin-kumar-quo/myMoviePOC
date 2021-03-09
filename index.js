/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store, persistedStore} from './src/store/store';
import {PersistGate} from 'redux-persist/es/integration/react';

const MyApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => MyApp);
