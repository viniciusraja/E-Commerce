import React from 'react';

import CartItemCard from './CartItemCard';

export default (props) => {
  return (
    <CartItemCard
    name={props.name}
    img={props.img}
    price={props.price}
    count={props.count}
    />
  );
};
