//♡
//✖
//❤
//❌
//🔋
// LOGO DE WIFI EN PNG: https://www.pngegg.com/en/png-bboes
// LOGO DE SIGNAL EN PNG: https://www.flaticon.com/free-icon/low-signal_977945?term=signal%20strength&related_id=977945


import React from 'react';
import {View, Text, TextInput, Image, FlatList} from 'react-native';
import styles from '../styles/Styles.js';
import {recipes} from '../assets/data.json';
//recipes = recipes.recipes;
//aqui falta reasignar para que no se tenga que llamar doble recipe

//search bar
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

//recipes output
const Recipe = ({data}) => {
  return (
    <View style={styles.recipeContainer}>
      <Image style={styles.recipeImage} source={require('../../img/cover.jpg')}/> 
      <Text style={styles.recipeName}>{data.title}</Text>
    </View>
  );
};

//recipe container
const RecipeContainer = () => {
  const renderRecipe = ({item}) => <Recipe data={item} />;
  
  return (
    <FlatList
      data={recipes}
      renderItem={renderRecipe}
      keyExtractor={recipe => recipe.id}
    />
  );
};





const MainPage = () => {
  return (
    <View style={styles.body}>
      <InputSearch/>
      <Recipe url="./img/cover.jpg" name="foo"></Recipe>
    </View>
  );
};

export default MainPage;