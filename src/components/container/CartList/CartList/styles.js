import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  cartListContainer: {
    flex:1,
    width:'100%',
    alignItems:'center',
  },
  cartList:{
    width:'100%',
  },
  cartListContentContainer:{
    justifyContent:'center',
    alignItems:'center',
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
