import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import notesReducer from './reducers/notesReducer';
import languageReducer from './reducers/languageReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  language: languageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
