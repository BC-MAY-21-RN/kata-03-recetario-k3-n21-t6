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
  /* Notese que usamos recipeImages, un array que se importo previamente
    para el uso dinamico de imagenes, estamos tomando como referencia la id
    de cada receta para encontrar la imagen
   */

  return (
    /*Retornamos la mitad de la pantalla como imagen y su informacion. Y la otra mitad de los ingredientes */
    // resizeMode es un parametro de la imagen, es nativo, es para ver como renderizar la imagen
    //cuando la resolucion de la img es mas grande que los tamaños que le estas dando cover te ayuda con eso
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
  /*Recibimos los ingredientes
    y renderizamos el nombre y la cantidad de cada uno 
    de los ingredientes en un row
  */

  const renderItem = ({item}) => (
    <View style={styles.ingredient}>
      {/*Renderizado del nombre del ingrediente con su monto*/}
      <Text style={styles.coverBottomFootext}>{item.name}</Text>
      <Text style={styles.coverBottomFootext}>{item.amount}</Text>
    </View>
  );

  return (
    /*Flatlist donde llamamos a la funcion renderItem de arriba*/
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separateFlatList} />}
      keyExtractor={({name}) => name}
    />
  );
};

const Description = ({recipe}) => {
  //Retornamos el Componente IngredientList que sera la lista de los ingredientes
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

//Componente principal Recipe Page
const RecipePage = ({route, navigation}) => {
  //Recibimos los props del navigation.navigate
  const {recipe, category} = route.params;

  return (
    /* Retornamos el Componente Cover y Description*/
    <View style={styles.recipePage}>
      <Cover recipe={recipe} status={category} navigation={navigation} />
      <Description recipe={recipe} />
    </View>
  );
};

export default RecipePage;
