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
import recipeImages from '../assets/imagePaths.js';

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
const Recipe = ({recipe, navigation, category}) => {
  const toRecipe = () => {
    navigation.navigate('RecipePage', {
      recipe: recipe,
      category: category,
    });
  };

  return (
    <TouchableHighlight style={styles.recipeContainer} onPress={toRecipe}>
      <View>
        <Image
          style={category == 'Trending' ? styles.recipeImage : styles.size}
          source={recipeImages[recipe.id].foodImage}
        />
        <Text style={styles.recipeName}>{recipe.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

//recipe container
const RecipeContainer = ({navigation, recipes, category}) => {
  const renderRecipe = ({item}) => (
    <Recipe navigation={navigation} recipe={item} category={category} />
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
        recipes={[recipes[0], recipes[1], recipes[2]]}
        category="Trending"
      />
      <RecipeContainer
        navigation={navigation}
        recipes={[recipes[2], recipes[3], recipes[4]]}
        category="Recent"
      />
    </View>
  );
};

export default MainPage;
