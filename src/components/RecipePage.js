import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import styles from '../styles/Styles.js';

const Cover = ({recipe, status}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/0.jpeg')}
      style={styles.cover}
      imageStyle={{opacity: 0.4}}>
      <View style={styles.coverTop}>
        <Text style={[styles.icon, styles.justifyLeft]}>icon</Text>
        <View style={styles.coverIcons}>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
          <Text style={[styles.icon, styles.justifyRight]}>icon</Text>
        </View>
      </View>
      <View>
        <Text style={styles.coverBottomFootext}>{recipe.title}</Text>
        <Text style={styles.coverBottomTitle}>{status}</Text>
      </View>
    </ImageBackground>
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
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: 'grey'}} />
      )}
      keyExtractor={({index}) => index}
    />
  );
};

const Description = ({recipe}) => {
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

const RecipePage = ({recipe}) => {
  return (
    <View style={styles.recipePage}>
      <Cover recipe={recipe} status="Trending" />
      <Description recipe={recipe} />
    </View>
  );
};
export default RecipePage;
