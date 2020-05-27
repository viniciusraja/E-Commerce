import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  productsListContainer: {
    height:230,
    width:'100%',
    alignItems:'center',
    
  },
  productsListNameContainer:{
    height:70,
    width:'80%',
    top:15,
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:1,
    borderTopColor:'#f5f5f5',
  },
  productsListNameTitle:{
    paddingHorizontal:15,
    alignSelf:'center',
    textAlign:'center',
    color:Constants.Colors.yellowMostard,
    backgroundColor:Constants.Colors.backgroundColor,
    marginLeft:20,
    position:'absolute',
    bottom:45,
    fontSize:35,
    fontFamily:Constants.fontFamily
  },
  productsListNameSubtitle:{
    height:60,
    top:15,
    color:Constants.Colors.yellowMostard,
    textAlignVertical:'top',
    textAlign:'center',
    fontSize:22,
    opacity:0.5,
    fontFamily:Constants.fontFamily
  },
  productsList:{
    justifyContent:'center',
    alignItems:'center',
    height:200,
  },

 

});
