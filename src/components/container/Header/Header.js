import React, { useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import Constants from '../../../config/constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import {showLoginComponent} from '../../../store/ducks/actions/showComponent';

const Header = (props) => {
  const [search, setSearch] = useState('');
  const dispatch= useDispatch()
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="cart-outline"
          size={24}
          color={Constants.Colors.lightGrey}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={Constants.Colors.lightGrey}
        onChangeText={(text) => setSearch(text)}
        defaultValue={search}
      />
      <TouchableOpacity onPress={() => dispatch(showLoginComponent())}>
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
