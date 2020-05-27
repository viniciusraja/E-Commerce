import React from 'react';

import CartList from './CartList'

export default (props) => {
  return (
    <CartList products={props.products} productsListTitle={props.productsListTitle} productsListSubtitle={props.productsListSubtitle} 
    />
  );
};
