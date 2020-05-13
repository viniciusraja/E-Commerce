import React from 'react';

import { StatusBar, View} from 'react-native';

import * as Font from 'expo-font';

import Router from './src/navigation/navigations'
class App extends React.Component{
  
        state = {
            fontLoaded: false,
          };

        async componentDidMount() {
            await Font.loadAsync({
                'big_noodle_titling': {
                    uri: require('./src/assets/fonts/big_noodle_titling.ttf'),
            },
            });
        
            this.setState({ fontLoaded: true });
          }

          


   

    render(){
        return(
            this.state.fontLoaded? 
        <>
        <StatusBar hidden />
        <Router/>
        </>:<View/>
        )
    }
}

export default App;
