import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import styles from '../styles/Styles.js';

const Cover = ({recipe, status}) => {
  return (
    <View>
      <ImageBackground resizeMode="cover" style={styles.coverThumbnail} source={require('../assets/images/0.jpeg')} >
        <View>
          <Text style={[styles.icon, styles.justifyLeft]}>icon</Text>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
        </View>
        <View>
          <Text style={styles.coverBottomFootext}>{recipe.title}</Text>
          <Text style={styles.coverBottomTitle}>{status}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const IngredientList = ({ingredients}) => {
  const renderItem = ({item}) => (
    <View style={styles.ingredient}>
      <Text style={styles.coverBottomFootext}>{item.name}</Text>
      <Text style={styles.coverBottomFootext}>{item.amount}</Text>
    </View>
  );

  return (
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      keyExtractor={ ({index}) => index }/>
  );
};
const Description = ({recipe}) => {
  return (
    <View>
      <Text style={styles.coverBottomFootext}>Ingredients</Text>
      <Text style={styles.coverBottomFootext}>for {recipe.servings} servings</Text>
      <IngredientList ingredients={recipe.ingredients} />
    </View>
  );
};

const RecipePage = ({recipe}) => {
  return (
    <View style={styles.recipePage}>
      <Cover style={styles.cover} recipe={recipe} status="Trending" />
      <Description style={styles.desc} recipe={recipe}/>
    </View>
  );
};
export default RecipePage;