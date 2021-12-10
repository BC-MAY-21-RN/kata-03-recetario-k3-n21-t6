import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/Styles.js';
import {IngredientList} from './IngredientList.js';

export const Description = ({recipe}) => {
  //Retornamos el Componente IngredientList que sera la lista de los ingredientes
  return (
    <View style={styles.cover}>
      <Text style={styles.coverBottomFootext}>Ingredients</Text>
      <Text style={styles.coverBottomFootext}>
        for {recipe.servings} servings
      </Text>
      <IngredientList ingredients={recipe.ingredients} />
    </View>
  );
};
