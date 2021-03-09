import {createStore, applyMiddleware} from 'redux';
import {mainReducer} from './reducers';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, mainReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistedStore = persistStore(store);
