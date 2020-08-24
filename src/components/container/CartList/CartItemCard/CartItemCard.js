import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import images from 'assets/images';

const CartItemCard = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  return (
    <View style={styles.cartItemCardContainer}>
      <TouchableOpacity
      style={{width:'100%', height:'100%',justifyContent:'center',alignItems:'center',    flexDirection:'row',
    }}
        onPress={() => navigate('ProducItemDescription', { props:props })}>
        <View style={styles.cartImageContainer}>
          <Image
            style={styles.cartImage}
            source={images.products[props.img]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cartItemDetailsContainer}>
          <View style={styles.productNameAndTotalContainer}>
            <Text style={styles.productNameText}>{props.name}</Text>
          </View>
          <View style={styles.productQuantityContainer}>
            <Text style={styles.productQuantityAndPriceText}>
              {props.count} x
            </Text>
          </View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productQuantityAndPriceText}>
              {props.price}
            </Text>
          </View>
          <View style={styles.productNameAndTotalContainer}>
            <Text style={styles.productsTotalPriceText}>
              {(props.count * props.price).toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartItemCard;
