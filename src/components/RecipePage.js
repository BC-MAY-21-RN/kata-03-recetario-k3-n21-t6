import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import styles from '../styles/Styles.js';
import Icon from 'react-native-vector-icons/Ionicons';

const Cover = ({recipe, status}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/0.jpeg')}
      style={styles.cover}
      imageStyle={{opacity: 0.4}}>
      <View style={styles.coverTop}>
        <Icon name="close-outline" size={40} color="#fff" />
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
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: 'grey'}} />
      )}
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

//PA ATRAS
//navigation.goBack()
//solucionar params.recipe

const RecipePage = ({route, navigation}) => {
  const {recipe} = route.params.recipe;
  return (
    <View style={styles.recipePage}>
      <Cover recipe={recipe} status="Trending" />
      <Description recipe={recipe} />
    </View>
  );
};
export default RecipePage;
