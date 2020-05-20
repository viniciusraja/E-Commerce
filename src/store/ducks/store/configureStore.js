import { createStore, combineReducers } from 'redux';
import showComponent from '../reducers/showComponentReducer';
import getCategoriesList from '../reducers/categoriesListReducer';
import getProductsList from '../reducers/productsListReducer';

const rootReducer = combineReducers({
  showComponent,
  getCategoriesList,
  getProductsList
});

const configureStore = () =>
  createStore(rootReducer);

export default configureStore;
