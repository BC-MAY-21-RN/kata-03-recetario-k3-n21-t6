import React from 'react';
import {View} from 'react-native';
import styles from '../styles/Styles.js';
import {Cover, Description} from '../components/RecipePage';

//Componente principal Recipe Page
export const RecipePage = ({route, navigation}) => {
  //Recibimos los props del navigation.navigate
  const {recipe, category} = route.params;

  return (
    /* Retornamos el Componente Cover y Description*/
    <View style={styles.recipePage}>
      <Cover recipe={recipe} status={category} navigation={navigation} />
      <Description recipe={recipe} />
    </View>
  );
};
