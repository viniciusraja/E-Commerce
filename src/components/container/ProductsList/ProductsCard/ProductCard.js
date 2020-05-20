import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'config/constants/Constants'
import Footer from 'assets/svg/categoryCardFooter.svg'
import images from 'assets/images'


const ProductCard = (props) => {
  const sandwichImg=props.img
  return (
    <View style={styles.productCardContainer}>
      <TouchableOpacity>

    <View style={styles.productCard}>
      <View style={styles.productNameContainer}>
      <Text style={styles.productName}>{props.name}</Text>
      </View>
      <View style={styles.piceTagContainer} >
        <Text style={styles.priceTagText}>
          {`R$${props.price}`}
        </Text>
      </View>
     <View style={styles.productImageContainer}>
      <Image style={styles.productImage} source={images.burguers[props.img]} resizeMode='contain'/>
      </View> 
    </View>
    </TouchableOpacity>

    </View>
  );
};

export default ProductCard;
