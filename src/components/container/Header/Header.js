import React, { useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
  Easing,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import Constants from '../../../config/constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { showLoginComponent } from 'store/ducks/actions/showComponent';
import { useNavigation } from 'react-navigation-hooks';

const springValue = new Animated.Value(0);
const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        scaleSpring: springValue,
      },
    },
  ],
  { useNativeDriver: true }
);

const springAnimateBurguer = () => {
  springValue.setValue(0.9);
  Animated.spring(springValue, {
    toValue: 1.3,
    friction: 2,
  }).start();
};

const getTotalPriceOfCart = (cartList) => {
  console.log(cartList.length);
  if (!!cartList.length) {
    springAnimateBurguer()
    const total = cartList
      .map((item) => item.count)
      .reduce((price, total) => price + total);
    return total;
  }
  return 0;
};

const Header = (props) => {
  const cartList = useSelector((state) => state.getCartList.cartList);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  let total = getTotalPriceOfCart(cartList);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigate('CartScreen')}
        style={styles.cartButtonContainer}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={24}
          color={Constants.Colors.lightGrey}
        />
        <Animated.View
          style={[
            styles.quantityOfItemsInCartContainer,
            {
              transform: [{ scale: springValue }],
            },
          ]}>
          <Text style={styles.quantityOfItemsInCartText}>{total}</Text>
        </Animated.View>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={Constants.Colors.lightGrey}
        onChangeText={(text) => setSearch(text)}
        defaultValue={search}
      />
      <TouchableOpacity
        onPress={() => dispatch(showLoginComponent())}
        style={styles.loginButtonContainer}>
        <FontAwesome
          name="user-circle"
          size={24}
          color={Constants.Colors.lightGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
