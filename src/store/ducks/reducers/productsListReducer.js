import {
  FETCH_PRODUCTS_LIST_PENDING,
  FETCH_PRODUCTS_LIST_ERROR,
  FETCH_PRODUCTS_LIST_SUCCESS,
  SHOULD_UPDATE_PRODUCTS_LIST
} from 'store/ducks/actions/types';
import burguersList from '../../data/burguersList.json';
import sideDishesList from '../../data/sideDishesList.json';
import drinksList from '../../data/drinksList.json';

const initialState = {
  pending:false,
  error:null,
  productsList: [],
  shouldUpdateList:false
};

const getProductsList = (state = initialState, action) => {console.log(state.shouldUpdateList)
  switch (action.type) {
    case FETCH_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        pending:false,
        productsList:[
          ...action.payload
        ],
      };
      case FETCH_PRODUCTS_LIST_PENDING:
        return {
          ...state,
          pending:true,
        };
        case FETCH_PRODUCTS_LIST_ERROR:
          return {
            ...state,
            
            pending:false,
            error:action.payload
          };
        case SHOULD_UPDATE_PRODUCTS_LIST:
          return {
            ...state,
            shouldUpdateList:!state.shouldUpdateList            
          };
    default:
      return state;
  }
};

export default getProductsList;
