import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import ProductCard from '../ProductsCard/'

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList = (props) => {
  const dispatch= useDispatch()
  const productsList= useSelector(state => (state.getProductsList.productsList))
  return (
    <View style={styles.productsListContainer}>
      <View style={styles.productsListNameContainer}>
      <Text style={styles.productsListNameTitle}>{`#${props.productsListTitle}`}</Text>
      <Text style={styles.productsListNameSubtitle}>{props.productsListSubtitle}</Text>
      </View>
      <FlatList
      contentContainerStyle={styles.productsList}
      data={productsList}
      renderItem={({item})=><ProductCard name={item.name} img={item.img} price={item.price}/>}
      keyExtractor={item=>`${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsList;
