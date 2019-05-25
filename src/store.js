import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(
    ...enhancers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env !== 'P' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );

  const store = createStore(Reducer, preloadedState, composedEnhancers);

  return store;
}
