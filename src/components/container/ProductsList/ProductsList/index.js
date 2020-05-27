import React from 'react';

import ProductsList from './ProductsList'

export default (props) => {
  return (
    <ProductsList products={props.products} productsListTitle={props.productsListTitle} productsListSubtitle={props.productsListSubtitle} 
    />
  );
};
