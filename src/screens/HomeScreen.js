import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Image,
  Linking,
  SafeAreaView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import Header from '../components/container/Header';
import LoginContainer from '../components/container/LoginContainer';
import CategoriesList from '../components/container/CategoriesList/CategoriesList'
import ProductsList from '../components/container/ProductsList/ProductsList'
import Constants from '../config/constants/Constants';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categoriesProducts:[
          {id:1,title:"DACASA", subtitle: "desliza, escolhe e clica!"},
          {id:2,title:"MAISÉMELHOR", subtitle:"já escolheu seu hambúrguer? Acrescenta os acompanhamentos!"},
          {id:3,title:"PRAMOLHAR", subtitle: "já escolheu seu hambúrguer e os acompanhamentos? finaliza com a bebida! desliza, escolhe e clica!"},
        ]
    };
  }
  shouldComponentRender=()=> {
  }

  render() {

    if (this.shouldComponentRender())
      return (
          <ActivityIndicator size={60} color={Constants.Colors.darkGreen} />
      );

    return (
        <View style={styles.container}>
          <Header style={styles.header}/>
         
          <View style={styles.loginContainer}>
          <LoginContainer />
          </View>

          <FlatList
      contentContainerStyle={styles.productsList}
      data={this.state.categoriesProducts}
      ListHeaderComponent={
        <View style={styles.imagesContainer}>
          <View style={styles.imagesContainer}>
        <Image style={styles.hamburguerPackageImage} source={require('assets/images/burguer-package.png')} resizeMode='contain'/>
        </View>
        <View style={styles.backgroundContainer}/>
        <View style={styles.hamburguerSpreadImageContainer}>
        <Image style={styles.hamburguerSpreadImage} source={require('assets/images/burguerSpread.png')} resizeMode='contain'/>
        </View>
        </View>
      }
      renderItem={({item})=><ProductsList productsListTitle={item.title} productsListSubtitle={item.subtitle} />}
      keyExtractor={item=>`${item.id}`}
      showsVerticalScrollIndicator={false}
      />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Constants.Colors.backgroundColor,
  },
  header:{},
  categoriesList:{
  },
  imagesContainer:{
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-end',
    height:250,
    marginBottom:20
  },
  backgroundContainer:{
    position:'absolute',
    borderRadius:20,
    backgroundColor:"#fff",
    height:'100%',
    width:60,
  },
  hamburguerPackageImageContainer:{
    width:'100%',
  },
  hamburguerSpreadImageContainer:{
    position:'absolute',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    height:'100%',
    width:'100%',
  },
  hamburguerSpreadImage:{
    alignSelf:'flex-end',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    height:'100%',
    width:100,
  },
  productsListContainer:{
    height:'80%',
  },
  loginContainer:{
    position:'absolute',
    top:100,
    width:'100%',
    height:'100%',
    alignItems:'center'
  }

});



export default HomeScreen;
