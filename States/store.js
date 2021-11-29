import {createStore} from 'redux';
import reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
//if we want to use thunk:
//we need to use middeware like thunk if we return function in action-creator.
// export const store = createStore(reducers , {} ,applyMiddleware(thunk));
