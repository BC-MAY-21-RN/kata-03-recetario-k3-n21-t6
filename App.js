/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
Co-authored-by: Namoku <mythemc@gmail.com> 
Co-authored-by: xFerchoVJ <fer_elsword@hotmail.com> 
Co-authored-by: Darkboy5120 <hmaldonado0@ucol.mx> 
Co-authored-by: Hugoneytor <halvarez0@ucol.mx> 
 */

import { whileStatement } from '@babel/types';
import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Recipes from './src/assets/data.json';



const Recipe = ({url, name}) => {
  return (
    <View style={styles.recipeContainer}>
      <Image style={styles.recipeImage} source={url} />
      <Text style={styles.recipeName}>{name}</Text>
    </View>
  );
};

const InputSearch = () => {
  return (
    <View>
      <TextInput
        placeholder="What do you want to eat?"
        placeholderTextColor="white"
        style={styles.search}/>
    </View>
  );
};

const App = () => {
  //const renderRecipes = ({item}) => <Recipe url='./img/recipes/dish0.jpeg' name={item.name}/>;

  return (
    <View style={styles.body}>
      <InputSearch/>
      {/* <Recipe source={require('./src/assets/images/dish0.jpeg')} name='Hey'/> */}
      {/* <FlatList
        data={Recipes}
        renderItem={renderRecipes}
        keyExtractor={recipe => recipe.id}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#282828',
    padding: 20,
    flex: 1,
  },
  recipeContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  recipeImage: {
    borderRadius: 25,
    width: 120,
    height: 120,
    
  },
  recipeName: {
    fontSize: 24,
    color: 'white',
    paddingTop: 20,
  },
  search: {
    width: '95%',
    height: 40,
    padding: 10,
    backgroundColor: '#343435',
    color: 'white',
    margin: 10,
    borderRadius: 10
  }
});

export default App;
