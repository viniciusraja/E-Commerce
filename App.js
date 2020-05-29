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
                    uri: require('assets/fonts/steelfish-rg.ttf')
                },
                'steelfish-bold': {
                    uri: require('assets/fonts/steelfish-bd.ttf'),
            },
        })
            await Asset.loadAsync([
               require('assets/images/products/burguerChiken.png'),
               require('assets/images/products/burguerBacon.png'),
               require('assets/images/products/burguerOnion.png'),
               require('assets/images/products/tripleBurguer.png'),
               require('assets/images/products/onionRings.png'),
               require('assets/images/products/chikenNuggets.png'),
               require('assets/images/products/fries.png'),
               require('assets/images/products/guarana.png'),
               require('assets/images/products/coke.png'),
               require('assets/images/products/fanta.png'),
               require('assets/images/products/grapette.png'),
               require('assets/images/products/burguerPicanha.png'),
               require('assets/images/products/friedChiken.png'),
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
