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
import { updateProductListComponent } from 'store/ducks/actions/productsList';
import axios from 'axios';
import api from 'services/api';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import expoConstants from 'expo-constants';
import {isProductNameValid,isProductIngredientsDetailsValid,isProductAllergicInformationValid,forcePriceInputToValid} from 'config/Validations'

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
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
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
  
  function adminActionSucceded(msg){
    Alert.alert(msg)
    dispatch(updateProductListComponent())
    dispatch(showAdminProductConfigComponent({}))
  }

  const adminAddProductToList = async () => {
    try {
      const isPriceInputValid=forcePriceInputToValid(`${productPrice}`|| adminConfigProps.price)
      isProductNameValid(productName || adminConfigProps.name)
      isProductIngredientsDetailsValid(productIngredientsDetails)
      isProductAllergicInformationValid(productAllergicInformation)
      if (!!adminConfigProps.id) {
       const productWasAdded= await api
          .put(
            `/products/${adminConfigProps.id}`,
            {
              category_id: adminConfigProps.categoryId,
              name: productName || adminConfigProps.name,
              price: `${isPriceInputValid}` || adminConfigProps.price,
              ingredients_details:
                productIngredientsDetails ||
                adminConfigProps.ingredients_details,
              allergic_information:
                productAllergicInformation ||
                adminConfigProps.allergic_information,
            },
            {
              headers: {
                Authorization: `bearer ${await SecureStore.getItemAsync(
                  'userToken'
                )}`,
                'content-type': 'application/json',
              },
            }
          )
          .then((res) => true)
          .catch((err) => console.log(err));
          if(productWasAdded)adminActionSucceded("Produto atualizado com sucesso!")
      } else {
        const productWasUpdated=await api
          .post(
            '/products',
            {
              category_id: adminConfigProps.categoryId,
              name: `${productName}`,
              price: `${isPriceInputValid}`,
              ingredients_details: `${productIngredientsDetails}`,
              allergic_information: `${productAllergicInformation}`,
            },
            {
              headers: {
                Authorization: `bearer ${await SecureStore.getItemAsync(
                  'userToken'
                )}`,
                'content-type': 'application/json',
              },
            }
          )
          .then((res) => true)
          .catch((err) => console.log(err));
          if(productWasUpdated)adminActionSucceded("Produto atualizado com sucesso!")
      }
    } catch (error) {
      Alert.alert(error)
    }
  };
  const adminDeleteProductToList = async () => {
    try {
      const productWasDeleted = await api
        .delete(`/products/${adminConfigProps.id}`, {
          headers: {
            Authorization: `bearer ${await SecureStore.getItemAsync(
              'userToken'
            )}`,
            'content-type': 'application/json',
          },
        })
        .then((res) => true)
        .catch((err) => console.log(err));
      if (productWasDeleted)adminActionSucceded("Produto foi Deletado!") 
    } catch (error) {
      Alert.alert(error)
    }
  };
  const createFormData = (image) => {
    const data = new FormData();
    data.append('file', { name: 'Imagem', uri: image.uri, type: image.type });
    return data;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      result.uri =
        Platform.OS === 'android'
          ? result.uri
          : result.uri.replace('file://', '');
      result.type = `${result.type}/${
        (result.uri.split('.'),
        result.uri.split('.')[result.uri.split('.').length - 1])
      }`;
    }
    return result;
  };
  const adminAddProductImage = async (productId) => {
    try {
      const image = await pickImage();
      if (image.cancelled) {
        throw 'Imagem n foi selecionada';
      }
      const data = createFormData(image);
      const config = {
        headers: {
          imagem: '',
          Accept: '*/*',
          'content-type': 'multipart/form-data',
          Authorization: `bearer ${await SecureStore.getItemAsync(
            'userToken'
          )}`,
        },
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
          setImageUploadProgress(progress);
        },
      };
      const isAPUTMethod = adminConfigProps.imageId ? true : false;
      if (isAPUTMethod) {
       const imageWasAdded=await api
          .put(
            `http://192.168.1.14:4000/products/${productId}/image`,
            data,
            config
          )
          .then((res) => true)
          .catch((err) => console.log(err));
          if (imageWasAdded)adminActionSucceded("Imagem foi adicionada com sucesso!") 
      } else {
        const imageWasUpdated=await api
          .post(
            `http://192.168.1.14:4000/products/${productId}/image`,
            data,
            config
          )
          .then((res) => true)
          .catch((err) => console.log(err));
          if (imageWasUpdated)adminActionSucceded("Imagem foi atualizada com sucesso!") 
        }
    } catch (error) {
      Alert.alert(error)
    }
  };
  
  const adminDeleteProductImage = async () => {
    try {
      const imgeWasDeleted = await api
        .delete(`/products/${adminConfigProps.id}/image`, {
          headers: {
            Authorization: `bearer ${await SecureStore.getItemAsync(
              'userToken'
            )}`,
            'content-type': 'application/json',
          },
        })
        .then((res) => true)
        .catch((err) => console.log(err));
      if (imgeWasDeleted)adminActionSucceded("Imagem foi Deletada!") 
    } catch (error) {
      Alert.alert(error)
    }
  };

  const createDeleteAlert = async (isProductDelete) =>
  (isProductDelete=="Product")?Alert.alert(
      'Você tem certeza que quer deletar o produto?',
      adminConfigProps.name,
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'SIM', onPress: () => adminDeleteProductToList() },
      ],
      { cancelable: false }
    ):Alert.alert(
      'Você tem certeza que quer deletar a imagem?',
      adminConfigProps.name,
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'SIM', onPress: () => adminDeleteProductImage() },
      ],
      { cancelable: false }
    );

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
              placeholder={`Preço do Produto \n(ex: 12.50)`}
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setProductPrice(text)}
              defaultValue={productPrice}
            />
            <TextInput
              style={styles.input}
              placeholder={`Detalhes do Produto \n(ex: Ingredientes)`}
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
          {adminConfigProps.id && (
            <TouchableOpacity
              style={styles.submitConfig}
              onPress={async () => await createDeleteAlert("Product")}>
              <View style={styles.submitConfigContainer}>
                <AntDesign name="delete" size={18} color="red" />
                <Text
                  style={
                    (styles.AddImageInputText, { color: 'red', marginLeft: 10 })
                  }>
                  DELETE o Produto
                </Text>
              </View>
            </TouchableOpacity>
          )}
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
             <View style={{bottom:10}}>
              {!!adminConfigProps.url ? (
                <Image
                  style={{ height: 140, width: 140, borderRadius:70}}
                  source={{ uri: adminConfigProps.url }}
                  resizeMode="cover"
                  />
              ) : (
                <View style={{height:140,width:140,borderRadius:70,justifyContent:'center', alignItems:'center', backgroundColor:'#FFF'}}>
                  <MaterialCommunityIcons name="food" size={100} color="#555" />
                </View>
              )}
              {(imageUploadProgress!=0)&&<View style={{height:25, width:"100%"}}>
                    <Text style={{fontSize:15,textAlign:'center', color:Constants.Colors.lightGrey}}>Carregando...  {imageUploadProgress}%</Text>
              </View>}
              </View>
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
                  onPress={() =>
                    createDeleteAlert("Image")
                  }
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
