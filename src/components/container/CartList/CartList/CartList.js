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

const getTotalPriceOfCart=(cartList)=>{
  console.log(cartList.length)
  if(!!cartList.length){
  const total=cartList.map(item=>item.price*item.count).reduce((price,total)=>price+total).toFixed(2)
  return total}
  return 0
}

const CartList = (props) => {
  const dispatch = useDispatch();
  const cartList = props.products;
  let total=getTotalPriceOfCart(cartList)
  return (
    <View style={styles.cartListContainer}>
      <FlatList
        style={styles.cartList}
        ListHeaderComponent={
          <View style={styles.cartItemHeaderAndFooterContainer}>
            <View style={styles.productNameContainer}>
              <Text style={styles.productNameText}>Item</Text>
            </View>
            <View style={styles.productQuantityContainer}>
              <Text style={styles.productQuantityAndPriceText}>Qntd.</Text>
            </View>
            <View style={styles.productPriceContainer}>
              <Text style={styles.productQuantityAndPriceText}>Preço</Text>
            </View>
            <View style={styles.productTotalContainer}>
              <Text style={styles.productsTotalPriceText}>Total</Text>
            </View>
          </View>
        }
        contentContainerStyle={styles.cartListContentContainer}
        data={cartList}
        renderItem={({ item }) => (
          <CartItemCard
            name={item.name}
            img={item.img}
            price={item.price}
            id={item.id}
            count={item.count}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.cartItemHeaderAndFooterContainer}>
        <View style={styles.productTotalContainer}>
          <Text style={styles.productsTotalPriceText}>Total</Text>
        </View>
        <View style={styles.productTotalContainer}>
          <Text style={styles.productsTotalPriceText}>{total}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartList;
