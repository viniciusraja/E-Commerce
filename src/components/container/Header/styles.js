import { StyleSheet } from 'react-native';
import Constants from '../../../config/constants/Constants';

export const styles = StyleSheet.create({
  headerContainer: {
    height:55,
    width:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input:{
    height:40,
    width: '70%',
    paddingLeft:10,
    textAlign: 'left',
    color: '#FFF',
    backgroundColor:'#fff',
    borderRadius:30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    opacity:0.7,
    },
    
});
