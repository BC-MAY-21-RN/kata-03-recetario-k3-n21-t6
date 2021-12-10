import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../styles/Styles.js';

export const IngredientList = ({ingredients}) => {
  /*Recibimos los ingredientes
    y renderizamos el nombre y la cantidad de cada uno 
    de los ingredientes en un row
  */

  const renderItem = ({item}) => (
    <View style={styles.ingredient}>
      {/*Renderizado del nombre del ingrediente con su monto*/}
      <Text style={styles.coverBottomFootext}>{item.name}</Text>
      <Text style={styles.coverBottomFootext}>{item.amount}</Text>
    </View>
  );

  return (
    /*Flatlist donde llamamos a la funcion renderItem de arriba*/
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separateFlatList} />}
      keyExtractor={({name}) => name}
    />
  );
};
