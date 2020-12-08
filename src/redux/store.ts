import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
export const initializeStore = () =>{
  const windowIfDefined = typeof window === "undefined" ? null : (window as any);

  // pick debug or dummy enhancer
  const composeEnhancers =
  windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  
  const middleware = composeEnhancers(applyMiddleware(thunk));
  /* eslint-enable */
  const store = createStore(rootReducer, middleware);

  return store;
}
