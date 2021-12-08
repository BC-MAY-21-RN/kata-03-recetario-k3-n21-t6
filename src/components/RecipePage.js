import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import recipeImages from '../assets/imagePaths.js';

const Cover = ({recipe, status, navigation}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={recipeImages[recipe.id].foodImage}
      style={styles.cover}
      imageStyle={styles.opacityCover}>
      <View style={styles.coverTop}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon name="close-outline" size={40} color="#fff" />
        </TouchableHighlight>
        <View style={styles.coverIcons}>
          <Icon name="share-outline" size={30} color="#fff" />
          <Icon name="heart-outline" size={30} color="#fff" />
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
      ItemSeparatorComponent={() => <View style={styles.separateFlatList} />}
      keyExtractor={({name}) => name}
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

const RecipePage = ({route, navigation}) => {
  const {recipe, category} = route.params;
  return (
    <View style={styles.recipePage}>
      <Cover recipe={recipe} status={category} navigation={navigation} />
      <Description recipe={recipe} />
    </View>
  );
};

export default RecipePage;
