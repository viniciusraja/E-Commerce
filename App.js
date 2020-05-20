import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './src/store/ducks/store/configureStore'

import { StatusBar, View} from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Router from './src/navigation/navigations'

const store=configureStore()
class App extends React.Component{

        state = {
            fontLoaded: false,
          };

        async componentDidMount() {
            await Font.loadAsync({
                'steelfish-regular': {
                    uri: require('assets/fonts/steelfish-rg.ttf'),
            },
        });
            await Asset.loadAsync([
               require('assets/images/burguers/burguerChiken.png')
           ] ),

        
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
