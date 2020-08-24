import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Fontisto,
  MaterialIcons,
  AntDesign
} from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import images from 'assets/images';
import StyledBars from 'components/presentational/StyledBars';
import CartList from 'components/container/CartList/CartList'
import LoginContainer from 'components/container/LoginContainer';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { showLoginComponent} from 'store/ducks/actions/showComponent';

const getTotalPriceOfCart=(cartList)=>{
  if(!!cartList.length){
  const total=cartList.map(item=>item.price*item.count).reduce((price,total)=>price+total).toFixed(2)
  return total}
  return 0
}

const CartScreen = (props) => {
  const dispatch= useDispatch()
  const {navigate} = useNavigation();
  const cartList= useSelector(state => (state.getCartList.cartList))
  let total=getTotalPriceOfCart(cartList)
  const activeUserAdress = useSelector((state) => state.getUserInfo.activeUserAdress);
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);

  return (
    <View style={styles.container}>
      {activeUserAdress?<TouchableOpacity style={[styles.activeAdressContainer]}
          onPress={()=>dispatch(showLoginComponent())}>
            <Ionicons style={{position:'absolute', left:10}} name="ios-home" size={24} color={Constants.Colors.yellowMostard} />
              <View style={{width:120,justifyContent:'space-between'}}>
              <Text style={[styles.adressInformationText,{color:Constants.Colors.yellowMostard}]}>{activeUserAdress.street}</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={[styles.adressInformationText,{color:Constants.Colors.yellowMostard}]}>Nº {activeUserAdress.number}</Text>
              <Text style={[styles.adressInformationText,{width:65, color:Constants.Colors.yellowMostard}]}>CEP {activeUserAdress.cep}</Text>
              </View>
              </View>
          </TouchableOpacity>:
          <TouchableOpacity style={[styles.activeAdressContainer]}
          onPress={()=>dispatch(showLoginComponent())}>
            {userInfo?<Text style={[styles.adressInformationText,{fontSize:20}]}>Insira seu endereço antes de finalizar o pedido</Text>:
            <Text style={[styles.adressInformationText,{fontSize:20}]}>Faça o Login antes de finalizar o pedido</Text>}
          </TouchableOpacity>
            }
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
      <View style={styles.cartList}>
          <CartList  products={cartList}/>
      </View>
      <View style={styles.cartItemHeaderAndFooterContainer}>
        <View style={styles.productTotalContainer}>
          <Text style={styles.productsTotalPriceText}>Total</Text>
        </View>
        <View style={styles.productTotalContainer}>
          <Text style={styles.productsTotalPriceText}>{total}</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.activeAdressContainer]}
          onPress={()=>dispatch(showLoginComponent())}>
            <Fontisto  style={{position:'absolute', left:25}}name="shopping-bag-1" size={26} color='green' />
              <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:20,textAlign:'center',width:250, color:'green'}}>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
      <LoginContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
  },
  cartList:{
    flex:1,
    width:'100%',
  },
  activeAdressContainer:{
    flexDirection:'row',
    height:50,
    width:"90%",
    backgroundColor:"#FFF",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    padding:15,
  },
  adressInformationText:{
    fontFamily:Constants.fontFamily,
    color:Constants.Colors.backgroundColor,
    fontSize:16
  },
  cartItemHeaderAndFooterContainer:{
    flexDirection:'row',
    height:30,
    width:'90%',
    borderRadius:15,
    marginVertical:5,
    backgroundColor:Constants.Colors.yellowMostard,
    justifyContent:'space-around',
  },
  productNameContainer:{
    width:'40%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productNameText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  productQuantityContainer:{
    width:'15%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productPriceContainer:{
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productQuantityAndPriceText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  productTotalContainer:{
    width:'25%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productsTotalPriceText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  
});



export default CartScreen;
