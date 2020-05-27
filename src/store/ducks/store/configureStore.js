import { createStore, combineReducers } from 'redux';
import showComponent from '../reducers/showComponentReducer';
import getProductsList from '../reducers/productsListReducer';
import getCartList from '../reducers/cartReducer';

const rootReducer = combineReducers({
  showComponent,
  getProductsList,
  getCartList,
});

const configureStore = () =>
  createStore(rootReducer);

export default configureStore;
