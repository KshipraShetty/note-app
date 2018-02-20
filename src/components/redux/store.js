import { createStore } from 'redux';

const storeState = (reducer) => {
  const store = createStore(
    reducer,
    +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

export default storeState;
