import React from 'react';

import ProductsList from './ProductsList'

export default (props) => {
  return (
    <ProductsList productsListTitle={props.productsListTitle} productsListSubtitle={props.productsListSubtitle} 
    />
  );
};
