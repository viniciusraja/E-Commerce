import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import CartItemCard from 'components/container/CartList/CartItemCard';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';



const CartList = (props) => {
  const dispatch = useDispatch();
  const cartList = props.products;
  console.log(cartList,'aaaaaaaaaa')
  return (
    <View style={styles.cartListContainer}>
      <FlatList
        style={styles.cartList}
        contentContainerStyle={styles.cartListContentContainer}
        data={cartList}
        renderItem={({ item }) => (
          <CartItemCard
            {...item}            
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};

export default CartList;
