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

const ProductsList = (props) => {
  const productsList= props.products
  return (
    <View style={styles.productsListContainer}>
      <View style={styles.productsListNameContainer}>
      <Text style={styles.productsListNameTitle}>{`#${props.productsListTitle}`}</Text>
      <Text style={styles.productsListNameSubtitle}>{props.productsListSubtitle}</Text>
      </View>
      <FlatList
      contentContainerStyle={styles.productsList}
      data={productsList}
      renderItem={({item})=><ProductCard name={item.name} img={item.img} price={item.price} id={item.id} details={item.details}/>}
      keyExtractor={item=>`${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductsList;
