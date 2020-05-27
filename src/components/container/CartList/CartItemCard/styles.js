import { StyleSheet } from 'react-native';
import Constants from '../../../../config/constants/Constants';

export const styles = StyleSheet.create({
  cartItemCardContainer: {
    flexDirection:'row',
    height:100,
    width:'90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#cdcdcd',
    marginVertical:5,
    borderRadius:15,
    paddingHorizontal:7

  },
  cartImageContainer:{
    height:60,
    width:60,
    justifyContent:'center',
    alignItems:'center',
  },
  cartImage:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  cartItemDetailsContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
  },
  productNameAndTotalContainer:{
    width:'25%',
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
    fontSize: 18,
    textAlign:'center',
    textAlignVertical:'center',
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
