import {PRODUCTS_LIST} from '../actions/types'
import productsList from '../../data/productsList.json'

const initialState = {
  productsList:[
    ...productsList
  ],
};

const getProductsList = (state = initialState, action) => {
    switch (action.type) {
    case PRODUCTS_LIST: 
      return {
          ...state,
        };
    default:
      return state;
  }
};

export default getProductsList;
