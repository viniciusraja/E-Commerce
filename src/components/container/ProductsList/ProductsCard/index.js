import React from 'react';

import ProductCard from './ProductCard'

export default (props) => {
  return (
    <ProductCard name={props.name} price={props.price} img={props.img} id={props.id} details={props.details}/>
  );
};
