import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/Styles.js';
import {recipes} from '../assets/data.json';

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
const Recipe = ({recipe, navigation}) => {
  const toRecipe = () => {
    navigation.navigate('RecipePage', {recipe: {recipe}});
  };

  return (
    <TouchableHighlight style={styles.recipeContainer} onPress={toRecipe}>
      <View>
        <Image
          style={styles.recipeImage}
          source={require('../assets/images/0.jpeg')}
        />
        <Text style={styles.recipeName}>{recipe.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

//recipe container
const RecipeContainer = ({navigation, recipes, category}) => {
  const renderRecipe = ({item}) => (
    <Recipe navigation={navigation} recipe={item} />
  );

  return (
    <View>
      <Text style={styles.recipesHeaderType}>{category}</Text>
      <FlatList
        horizontal
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={recipes => recipes.title}
      />
    </View>
  );
};

const MainPage = ({navigation}) => {
  return (
    <View style={styles.body}>
      <InputSearch />
      <RecipeContainer
        navigation={navigation}
        recipes={recipes}
        category="Recent"
      />
    </View>
  );
};

export default MainPage;
