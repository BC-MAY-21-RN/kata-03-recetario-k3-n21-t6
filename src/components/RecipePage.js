import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../styles/Styles.js';

const Cover = ({recipe, status}) => {
  return (
    <View style={styles.cover}>
      <Image style={styles.coverThumbnail} source={require('../assets/images/0.jpeg')} />
      <View style={styles.coverAbsoluteContainer}>
        <View style={styles.coverTop}>
          <Text style={[styles.icon, styles.justifyLeft]}>icon</Text>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
        </View>
        <View style={styles.coverBottom}>
          <Text style={styles.coverBottomFootext}>{recipe.title}</Text>
          <Text style={styles.coverBottomTitle}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const IngredientList = ({ingredients}) => {
  const renderItem = ({item}) => (
    //recordatorio: agregar estilos de esta madre
    <View>
      <Text>{item.name}</Text>
      <Text>{item.amount}</Text>
    </View>
  );

  return (
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      keyExtractor={ item => item.key }/>
  );
};
const Description = ({recipe}) => {
  return (
    <View>
      <Text>Ingredients</Text>
      <Text>for {recipe.servings} servings</Text>
      <IngredientList ingredients={recipe.ingredients} />
    </View>
  );
};

const RecipePage = ({recipe}) => {
  return (
    <View>
      <Cover recipe={recipe} status="Trending" />
      <Description recipe={recipe}/>
    </View>
  );
};
export default RecipePage;