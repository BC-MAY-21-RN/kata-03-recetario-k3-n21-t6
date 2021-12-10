import React from 'react';
import {View} from 'react-native';
import styles from '../styles/Styles.js';
import {InputSearch, RecipeContainer} from '../components/MainPage';
import {recipes} from '../assets/data.json';

//Componente Principal (HOMEPAGE}
//Recibimos la navegacion y la implementamos
export const MainPage = ({navigation}) => {
  return (
    //Retorna los componentes de Input Search, y Trending y Recent
    <View style={styles.body}>
      {/*Componente  Input Search */}
      <InputSearch />

      {/*Componente  RecipeContainer para el Trending */}
      <RecipeContainer
        navigation={navigation} //Para entre las pantallas
        recipes={[recipes[0], recipes[1], recipes[2]]} //Los obtenemos del data.json que importamos al inicio
        category="Trending"
      />

      {/*Componente  RecipeContainer para el Recent */}
      <RecipeContainer
        navigation={navigation} //Para entre las pantallas
        recipes={[recipes[2], recipes[3], recipes[4]]}
        category="Recent"
      />
    </View>
  );
};
