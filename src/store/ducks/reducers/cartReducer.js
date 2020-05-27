import {
  CART_LIST,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
} from '../actions/types';

const initialState = {
  cartList: [],
};

const getCartList = (state = initialState, action) => {

  switch (action.type) {
    
    case CART_LIST:
      return {
        ...state,
      };
      case ADD_ITEM_TO_CART: 
      let itemDoesntExistsInCart = true;
      if (state.cartList.length == 0)
      return {
        ...state,
        cartList:[
          { ...action.payload, count: 1 }],
      };
      state.cartList.map((item, index) => {
        if (item.id == action.payload.id) {
          itemDoesntExistsInCart = false;
        }
      });
      if (itemDoesntExistsInCart)
      return {
        ...state,
        cartList:[
          ...state.cartList,
          { ...action.payload, count: 1 }],
        
      };
      
      return {
        ...state,
        cartList: [
          ...state.cartList.map((item, index) => {
            if (item.id == action.payload.id) {
              return {
                ...item,
                count: item.count + 1,
              };
            }
            return {
              ...item,
            };
          }),
        ],
      }
      
    case REMOVE_ITEM_TO_CART:
      let itemsInCart=0
      if(state.cartList){
      state.cartList.map((item, index) => {
          if (item.id == action.payload.id) {
            itemsInCart=item.count
          }
        })}
      if(itemsInCart>1){
        return {
          ...state,
          cartList: [
            ...state.cartList.map((item, index) => {
              if (item.id == action.payload.id) {
                return {
                  ...item,
                  count: item.count - 1,
                };
              }
              return {
                ...item,
              };
            }),
          ],
        }
      }

      if(itemsInCart<=1){
       return {
        ...state,
              cartList:[ 
                 ...state.cartList.filter((item) =>{
                    return(item.id !== action.payload.id)})
                ]
                
      };}
      default:
        return state;
    }
};

export default getCartList;
