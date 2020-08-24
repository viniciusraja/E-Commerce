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
import Constants from 'config/constants/Constants';

import { useDispatch, useSelector } from 'react-redux';

import { showAdminCategoryConfigComponent } from 'store/ducks/actions/showComponent';
import { updateProductListComponent } from 'store/ducks/actions/productsList';
import axios from 'axios';
import api from 'services/api';
import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';
import expoConstants from 'expo-constants';
import {isCategoryTitleValid, isCategorySubtitleValid} from 'config/Validations'

const AdminCategoryConfigurationForm = (props) => {
  const dispatch = useDispatch();
  const adminConfigIsOpened = useSelector(
    (state) => state.showComponent.adminCategoryConfigContainer.show
  );
  const adminConfigProps = useSelector(
    (state) => state.showComponent.adminCategoryConfigContainer.props
  );
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categorySubtitle, setCategorySubtitle] = useState('');
  function adminActionSucceded(msg){
    Alert.alert(msg)
    dispatch(updateProductListComponent())
    dispatch(showAdminCategoryConfigComponent({}))
  }

  const adminAddCategory = async () => {
    try {
      isCategoryTitleValid(`${categoryTitle}` || adminConfigProps.title)
      isCategorySubtitleValid(`${categorySubtitle}` || adminConfigProps.subtitle)
      if (!!adminConfigProps.title) {
       const categoryWasAdded= await api
          .put(
            `/categories/${adminConfigProps.categoryId}`,
            {
              title: `${categoryTitle}` || adminConfigProps.title,
              subtitle: `${categorySubtitle}` || adminConfigProps.subtitle,
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
          if(categoryWasAdded)adminActionSucceded("Categoria atualizada com sucesso!")
      } else {
        const categoryWasUpdated=await api
          .post(
            '/categories',
            {
              title: `${categoryTitle}`,
              subtitle: `${categorySubtitle}`,
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
          if(categoryWasUpdated)adminActionSucceded("Categoria inserida com sucesso!")
      }
    } catch (error) {
        Alert.alert(error) 
         }
  };
  const adminDeleteCategory = async () => {
    try {
      if(adminConfigProps.hasProducts)throw("Primeiramente delete todos os produtos da sua categoria!")
      const categoryWasDeleted = await api
        .delete(`/categories/${adminConfigProps.categoryId}`, {
          headers: {
            Authorization: `bearer ${await SecureStore.getItemAsync(
              'userToken'
            )}`,
            'content-type': 'application/json',
          },
        })
        .then((res) => true)
        .catch((err) => console.log(err));
      if (categoryWasDeleted)adminActionSucceded("Categoria foi Deletada!") 
    } catch (error) {
      Alert.alert(error)   
 }
  };
   const createDeleteAlert = async (isProductDelete) =>{
  Alert.alert(
      'Você tem certeza que quer deletar a categoria?',
      adminConfigProps.title,
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'SIM', onPress: () => adminDeleteCategory() },
      ],
      { cancelable: false }
    )}
  return (
    <>
      {adminConfigIsOpened &&(
        <View style={styles.categoryConfigContainer}>
          <View style={styles.configTitleContainer}>
            <View style={{ flexDirection: 'column', width: '80%' }}>
              <SimpleLineIcons
                name="settings"
                size={26}
                color={Constants.Colors.lightGrey}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.configTitleText}>
                {!!adminConfigProps.title
                  ? `Edite a categoria\n --${adminConfigProps.title}--`
                  : `Adicionar uma categoria`}
                
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(showAdminCategoryConfigComponent({}))}
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
              placeholder="Título da Categoria"
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setCategoryTitle(text)}
              defaultValue={categoryTitle}
            />
            <TextInput
              style={styles.input}
              placeholder={`Subtítulo da Categoria`}
              placeholderTextColor={Constants.Colors.lightGrey}
              onChangeText={(text) => setCategorySubtitle(text)}
              defaultValue={categorySubtitle}
            />
            
            <TouchableOpacity
              style={styles.submitConfig}
              onPress={() => adminAddCategory()}>
              <View style={styles.submitConfigContainer}>
                <SimpleLineIcons name="login" size={18} color="green" />
                <Text style={styles.submitConfigText}>
                  {!!adminConfigProps.id ? `Editar Categoria` : `ADD Categoria`}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {adminConfigProps.title && (
            <TouchableOpacity
              style={styles.submitConfig}
              onPress={() => createDeleteAlert()}>
              <View style={styles.submitConfigContainer}>
                <AntDesign name="delete" size={18} color="red" />
                <Text
                  style={
                    (styles.AddImageInputText, { color: 'red', marginLeft: 10 })
                  }>
                  DELETE a Categoria
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
    
      )}
    </>
  );
};

export default AdminCategoryConfigurationForm;
