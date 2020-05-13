import { StyleSheet } from 'react-native';
import Constants from '../../../config/constants/Constants';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    height:'70%',
    width:'70%',
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    elevation:7
  },
  inputsAndUserImgContainer:{
    height:'60%',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
  },
  signInContainer:{
    width:'100%',
    height:'57%',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    height:40,
    width: '80%',
    paddingLeft:10,
    textAlign: 'left',
    color: '#FFF',
    backgroundColor:'#fff',
    borderRadius:10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    elevation:7
    },
    signUpButtonsContainer:{
    height:'28%',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',

  },
  signInButton:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  signInButtonContainer:{
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
  signInFacebookButtonContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingLeft:10,
    alignItems:'center',
    height:40,
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'#3b5998',
    borderWidth:1,
    borderRadius:10,
    elevation:5,
  },
  signInGoogleButtonContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingLeft:10,
    alignItems:'center',
    height:40,
    width:'80%',
    backgroundColor:'#fff',
    borderColor:'#de5246',
    borderWidth:1,
    borderRadius:10,
    elevation:5,
  },
  signInButtonText:{
    marginLeft:10,
    color:'green',
    textAlign:'center',
    textAlignVertical:'center',
  },
  signInFacebookButtonText:{
    marginLeft:10,
    color:'#3b5998',
    textAlign:'center',
    textAlignVertical:'center',
  },
  signInGoogleButtonText:{
    marginLeft:10,
    color:'#de5246',
    textAlign:'center',
    textAlignVertical:'center',
  },
  createAcountText:{
    color:'#757575',
    fontSize:15
  },
});
