import { createStore, combineReducers } from 'redux';
import showComponent from '../reducers/showComponentReducer';

const rootReducer = combineReducers({
    showComponent,
});

const configureStore = () =>
  createStore(rootReducer);

export default configureStore;
