/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
// convert object to string and store in localStorage
function saveToLocalStorage(movieReducers) {
  try {
    const serialisedState = JSON.stringify(movieReducers);
    localStorage.setItem('state', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
console.log(saveToLocalStorage());
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const initialState = loadFromLocalStorage();
  */
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
