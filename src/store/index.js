/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Redux Persist config
const config = {
  key: 'root',
  storage,
  blacklist: ['status'],
};

const reducer = persistCombineReducers(config, reducers);

const logger = store=> next=> action =>{
  if (typeof action === 'function') {
    console.log('call function', action.name);
  }

  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const middleware = [logger, thunk];

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware)),
  );

  //save store to local, then it will be reset to store when you reopen on next time.
  const persistor = persistStore(
    store,
    null,
    () => { store.getState(); },
  );

  return { persistor, store };
};

export default configureStore;
