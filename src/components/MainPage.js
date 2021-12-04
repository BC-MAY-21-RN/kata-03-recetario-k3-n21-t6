import React from 'react';
import { View, Text, TextInput, Image, FlatList } from 'react-native';
import styles from '../styles/Styles.js';
import { recipes } from '../assets/data.json';

//search bar
const InputSearch = () => {
  return (
    <View>
      <TextInput
        placeholder="What do you want to eat?"
        placeholderTextColor="white"
        style={styles.search}
      />
    </View>
  );
};

//recipes output
// eslint-disable-next-line react/prop-types
const Recipe = ({ data }) => {
  return (
    <View style={styles.recipeContainer}>
      <Image
        style={styles.recipeImage}
        source={require('../../img/cover.jpg')}
      />
      <Text style={styles.recipeName}>{data.title}</Text>
    </View>
  );
};

//recipe container
const RecipeContainer = () => {
  const renderRecipe = ({ item }) => <Recipe data={item} />;

  return (
    <FlatList
      data={recipes}
      renderItem={renderRecipe}
      keyExtractor={(recipe) => recipe.id}
    />
  );
};

const MainPage = () => {
  return (
    <View style={styles.body}>
      <InputSearch />
      <Recipe url="./img/cover.jpg" name="foo"></Recipe>
    </View>
  );
};

export default MainPage;
