import { StyleSheet } from 'react-native';
import Constants from '../../../../config/constants/Constants';

export const styles = StyleSheet.create({
  productCardButton:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productCardContainer: {
    height:120,
    width:200,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'flex-end',
    marginHorizontal:10,
  },
  productImageContainer:{
    position:'absolute',
    alignSelf:'flex-start',
    top:-20,
    left:25,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    zIndex:25,
  },
  productImage:{
    height:'100%',
    width:'100%',
  },
  priceTagContainer:{
    height:50,
    width:110,
    right:15,
    bottom:20,
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
    height:75,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
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
    textShadowColor:'#000',
    textShadowOffset: { width: -0.5, height:0.5 },
    textShadowRadius:0.5,
  },
  quantityOfProductsContainer: {
    position:'absolute',
    bottom:60,
    left:5,
    padding:2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 30,
    width: 75,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Constants.Colors.yellowMostard,
  },
  quantityOfProductsText: {
    flex: 1,
    textAlign: 'center',
    color: Constants.Colors.yellowMostard,
    fontFamily: Constants.fontFamily,
    fontSize: 20,
  },
  addIconContainer: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Constants.Colors.yellowMostard,
  }
 

});
