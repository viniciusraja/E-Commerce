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
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import images from 'assets/images';

import LoginContainer from 'components/container/LoginContainer';
import ProductsList from 'components/container/ProductsList/ProductsList';
import Constants from 'config/constants/Constants';
import AnimatedButton from 'components/container/AnimatedButton/AnimatedButton';
import { SharedElement } from 'react-native-motion';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
          };
  }
  shouldComponentRender = () => {};

  render() {
    if (this.shouldComponentRender())
      return <ActivityIndicator size={60} color={Constants.Colors.darkGreen} />;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.productsList}
          data={this.props.productsList}
          ListHeaderComponent={
            <View style={styles.imagesContainer}>
              <View style={styles.hamburguerPackageContainer}>
                <Image
                  style={styles.hamburguerPackageImage}
                  source={require('assets/images/burguer-package.png')}
                  resizeMode="contain"
                />
              </View>
              
            </View>
          }
          renderItem={({ item }) => (
            <ProductsList
              productsListTitle={item.title}
              productsListSubtitle={item.subtitle}
              products={item.products}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
          <LoginContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.backgroundColor,
  },
  header: {},
  categoriesList: {},
  imagesContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 250,
    marginBottom: 20,
  },
  hamburguerPackageContainer: {
    opacity: 0.6,
    width: '100%',
  },
  hamburguerPackageImageContainer: {
    width: '100%',
    opacity: 0.6,
  },
  buttonHamburguerContainer: {
    position: 'absolute',
    height: '100%',
  },
  productsListContainer: {
    height: '80%',
  },
  loginContainer: {
    position:'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'red'
  },
});

const mapStateToProps = (state) => ({
  productsList: state.getProductsList.productsList,
});

export default connect(mapStateToProps, null)(HomeScreen);
