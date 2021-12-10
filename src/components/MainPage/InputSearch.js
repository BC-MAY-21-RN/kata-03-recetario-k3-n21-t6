import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/Styles.js';

//search bar
export const InputSearch = () => {
  return (
    //Retornamos el componente con el input y los iconos
    <View style={styles.searchInput}>
      {/*Componente input*/}
      <Icon
        style={styles.inputSearchIcon}
        name="search-outline"
        size={30}
        color="#fff"
      />
      <TextInput
        placeholder="What do you want to eat?"
        placeholderTextColor="white"
        style={styles.search}
      />
      {/*View de los iconos */}
      <View style={styles.iconEnd}>
        <Icon
          style={styles.inputSearchIcon}
          name="mic-outline"
          size={30}
          color="#fff"
        />
      </View>
    </View>
  );
};
