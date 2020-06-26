import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  productConfigContainer: {
    position:'absolute',
    top:(Constants.Layout.window.height-400-Constants.Layout.headerHeight)/2,
    height:400,
    width:'70%',
    paddingVertical:10,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    elevation:7
  },
  configTitleContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    height:60,
    width:'100%',
  },
  configTitleText:{
    textAlign:'center',
    fontSize:15,
    alignSelf:'center',
    color:Constants.Colors.lightGrey,
  },
  inputsContainer:{
    height:'70%',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
  },
  
  input:{
    height:40,
    width: '80%',
    paddingLeft:10,
    textAlign: 'left',
    color: '#0c0c0c',
    backgroundColor:'#fff',
    borderRadius:10,
    elevation:7
    },
    AddImageInputText:{
      marginLeft:10,
      color:'green',
      textAlign:'center',
      textAlignVertical:'center',
    },
  submitConfig:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  submitConfigContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'#ddd',
    borderWidth:1,
    borderRadius:10,
    elevation:5,
  },
  submitConfigText:{
    marginLeft:10,
    color:'green',
    textAlign:'center',
    textAlignVertical:'center',
  },
});
