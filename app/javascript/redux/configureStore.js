import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer, { fetchmessage } from './message/api';

const reducer = combineReducers({
  messageReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

