import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './src/store/ducks/store/configureStore'

import { StatusBar, View} from 'react-native';

import * as Font from 'expo-font';

import Router from './src/navigation/navigations'

const store=configureStore()
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
        <Provider store={store}>
        <StatusBar hidden />
        <Router/>
        </Provider>
        </>:<View/>
        )
    }
}


export default App;
