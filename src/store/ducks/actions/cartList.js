import {CART_LIST, ADD_ITEM_TO_CART, REMOVE_ITEM_TO_CART} from './types'

export function getCartList() {
    return {
      type: CART_LIST,
    };
  }

  export function addItemToCart(item){
      return{
          type:ADD_ITEM_TO_CART,
          payload:item
      }
  }
  export function removeItemToCart(item){
      return{
          type:REMOVE_ITEM_TO_CART,
          payload:item
      }
  }