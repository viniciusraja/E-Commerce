import React from 'react';
import { TextInput, StyleSheet, ShadowPropTypesIOS} from 'react-native';
import Constants from '../../config/constants/Constants';

const StyledTextInput = (props) => {
  return (
          <TextInput style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor="#858585"
          />
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
    input:{
    height:30,
    width: '80%',
    textAlign: 'center',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    color: '#FFF',
    backgroundColor:'#fff',
    borderRadius:10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    elevation:7
    }
    
})