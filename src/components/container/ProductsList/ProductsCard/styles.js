import { StyleSheet } from 'react-native';
import Constants from '../../../../config/constants/Constants';

export const styles = StyleSheet.create({
  productCardContainer:{
    width:200,
    height:140,
    justifyContent:'center',
  },
  productCard: {
    height:90,
    width:180,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'flex-end',
    marginHorizontal:10,
  },
  productImageContainer:{
    position:'absolute',
    alignSelf:'flex-start',
    top:-20,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    zIndex:25,
  },
  productImage:{
    height:'100%',
    width:'100%'
  },
  piceTagContainer:{
    height:50,
    width:110,
    right:15,
    bottom:30,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:Constants.Colors.yellowMostard,
    borderRadius:20,
  },
  priceTagText:{
    fontFamily:Constants.fontFamily,
    fontSize:30,
  },
  productNameContainer:{
    top:-15,
    width:80,
    height:60,
    borderRadius:20,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#f5f5f5"
  },
  productName:{
    bottom:5,
    textAlign:'center',
    color:Constants.Colors.yellowMostard,
    fontFamily:Constants.fontFamily,
    fontSize:25,
  },
 

});
