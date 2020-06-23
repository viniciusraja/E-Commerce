import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
  Platform,
} from 'react-native';
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import Constants from '../../../config/constants/Constants';

import { useDispatch, useSelector } from 'react-redux';

import { showAdminProductConfigComponent } from 'store/ducks/actions/showComponent';

import axios from 'axios';
import api from 'services/api';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import expoConstants from 'expo-constants';

const AdminProductConfigurationForm = (props) => {
  const dispatch = useDispatch();
  const adminConfigIsOpened = useSelector(
    (state) => state.showComponent.adminProductConfigContainer.show
  );
  const adminConfigProps = useSelector(
    (state) => state.showComponent.adminProductConfigContainer.props
  );

  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productIngredientsDetails, setProductIngredientsDetails] = useState(
    ''
  );
  const [productAllergicInformation, setProductAllergicInformation] = useState(
    ''
  );
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (expoConstants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Precisamos de permissão para acessar sua galeria!');
        }
      }
    })();
  }, []);

  const adminAddProductToList = () => {
    try {
      if (!!adminConfigProps.id) {
        api
          .put(
            `/products/${adminConfigProps.id}`,
            {
              category_id: adminConfigProps.categoryId,
              name: productName || adminConfigProps.name,
              price: productPrice || adminConfigProps.price,
              ingredients_details:
                productIngredientsDetails ||
                adminConfigProps.ingredients_details,
              allergic_information:
                productAllergicInformation ||
                adminConfigProps.allergic_information,
            },
            { header: { Authorization: `Bearer ${userInfo.token}` } }
          )
          .catch((err) => console.log(err));
      } else {
        api
          .post(
            '/products',
            {
              category_id: adminConfigProps.categoryId,
              name: productName,
              price: `${productPrice}`,
              ingredients_details: productIngredientsDetails,
              allergic_information: productAllergicInformation,
            },
            { header: { Authorization: `Bearer ${userInfo.token}` } }
          )
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createFormData = (photo, body) => {
    const data = new FormData();
    data.append(
      'url',
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', '')
    );
    data.append('data', photo);
    data.append('name', 'sdfsdcsdcs');
    // Object.keys(body).forEach(key => {
    //   data.append(key, body[key]);
    // });
    return data;
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    return result;
  };
  const adminAddProductImage = async (productId) => {
    try {
      const image = await pickImage();
      if (image.cancelled) {
        throw 'Imagem n foi selecionada';
      }
      const data = new FormData();
      //  data.append('file',{path:image.uri,uri:image.uri,width:image.width,height:image.height, fileName: 'file',
      //  type: 'image/jpg'});
      // data.append("originalName","image")
      data.append("file",{name:"fotoo",uri:image.uri, type: 'image/png'})
      // data.append("file",{fieldname: 'file',
      // originalname: 'WhatsApp Image 2020-06-18 at 22.15.02.jpeg',
      // encoding: '7bit',
      // type: 'image/jpeg',
      // filename: 'products-1.jpeg',
      // uri: 'C:\\Users\\vinic\\Desktop\\Vinícius Rajá\\Diner Shop-Backend\\tmp\\uploads\\products-1.jpeg',
      // size: 51277})
      // data.append("data",{...image})
      // data.append("name","asdfasdasdasdasd")
      // console.log(image, 'aaaaaaaaaaaa', data);
      console.log(2, data);
      const config = {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          // 'Content-Type': 'multipart/form-data; Boundary=asasdfihobadaovhbaohuvb'
        },
        body:{},
        file:data,
      };

      fetch(`http://192.168.1.14:4000/products/${productId}/image`, {
        method: 'PUT',
        headers: {
          imagem:'',
          Accept: '*/*',
          "content-type": 'multipart/form-data',
        },
        body:data,
      })
      .then(console.log('ai jesususususu'))
      .catch((err) => console.log('errooo',err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {adminConfigIsOpened && adminConfigProps.editingProduct ? (
        <View style={styles.productConfigContainer}>
          <View style={styles.configTitleContainer}>
            <View style={{ flexDirection: 'column', width: '80%' }}>
              <SimpleLineIcons
                name="settings"
                size={26}
                color={Constants.Colors.lightGrey}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.configTitleText}>
                {!!adminConfigProps.productsListTitle
                  ? `Adicionar um produto\n a categoria --${adminConfigProps.productsListTitle}`
                  : `Edite o produto\n --${adminConfigProps.name}`}
                --
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(showAdminProductConfigComponent({}))}
            style={{ position: 'absolute', top: 10, right: 10 }}>
            <AntDesign
              name="close"
              size={25}
              color={Constants.Colors.lightGrey}
            />
          </TouchableOpacity>

          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome Produto"
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setProductName(text)}
              defaultValue={productName}
            />
            <TextInput
              style={styles.input}
              placeholder="Preço do Produto"
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setProductPrice(text)}
              defaultValue={productPrice}
            />
            <TextInput
              style={styles.input}
              placeholder="Detalhes do Produto"
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setProductIngredientsDetails(text)}
              defaultValue={productIngredientsDetails}
            />
            <TextInput
              style={styles.input}
              placeholder="Informações Adicionais"
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setProductAllergicInformation(text)}
              defaultValue={productAllergicInformation}
            />
            <TouchableOpacity
              style={styles.submitConfig}
              onPress={() => adminAddProductToList()}>
              <View style={styles.submitConfigContainer}>
                <SimpleLineIcons name="login" size={18} color="green" />
                <Text style={styles.submitConfigText}>
                  {!!adminConfigProps.id ? `Editar Produto` : `ADD Produto`}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        adminConfigIsOpened && (
          <View style={styles.productConfigContainer}>
            <View style={styles.configTitleContainer}>
              <View style={{ flexDirection: 'column', width: '80%' }}>
                <SimpleLineIcons
                  name="settings"
                  size={26}
                  color={Constants.Colors.lightGrey}
                  style={{ alignSelf: 'center' }}
                />
                <Text style={styles.configTitleText}>
                  {`Edite a Imagem do produto\n --${adminConfigProps.name}`}
                  --
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(showAdminProductConfigComponent({}))}
              style={{ position: 'absolute', top: 10, right: 10 }}>
              <AntDesign
                name="close"
                size={25}
                color={Constants.Colors.lightGrey}
              />
            </TouchableOpacity>

            <View style={styles.inputsContainer}>
              {!!adminConfigProps.url ? (
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{ uri: adminConfigProps.url }}
                  resizeMode="contain"
                />
              ) : (
                <View style={styles.productImageContainer}>
                  <MaterialCommunityIcons name="food" size={80} color="#555" />
                </View>
              )}

              <TouchableOpacity
                style={styles.submitConfig}
                onPress={() => adminAddProductImage(adminConfigProps.id)}>
                <View style={styles.submitConfigContainer}>
                  <SimpleLineIcons name="login" size={18} color="green" />
                  <Text style={styles.AddImageInputText}>
                    {!!adminConfigProps.url
                      ? 'Trocar Imagem'
                      : `Adicone a Imagem`}
                  </Text>
                </View>
              </TouchableOpacity>

              {adminConfigProps.imageId && (
                <TouchableOpacity
                  style={styles.submitConfig}
                  // onPress={() =>
                  //   adminAddProductImage(adminConfigProps.productId)
                  // }
                >
                  <View style={styles.submitConfigContainer}>
                    <AntDesign name="delete" size={18} color="red" />
                    <Text
                      style={
                        (styles.AddImageInputText,
                        { color: 'red', marginLeft: 10 })
                      }>
                      DELETE Imagem
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </>
  );
};

export default AdminProductConfigurationForm;
