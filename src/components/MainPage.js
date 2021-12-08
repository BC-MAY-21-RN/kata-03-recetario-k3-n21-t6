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
import Icon from 'react-native-vector-icons/Ionicons';
import {recipes} from '../assets/data.json';
import recipeImages from '../assets/imagePaths.js';

//search bar
const InputSearch = () => {
  return (
    //Retornamos el componente con el input y los iconos
    <View style={styles.searchInput}>
      {/*Componente input*/}
      <Icon
        style={styles.inputSearchIcon}
        name="search-outline"
        size={30}
        color="#fff"
      />
      <TextInput
        placeholder="What do you want to eat?"
        placeholderTextColor="white"
        style={styles.search}
      />
      {/*View de los iconos */}
      <View style={styles.iconEnd}>
        <Icon
          style={styles.inputSearchIcon}
          name="mic-outline"
          size={30}
          color="#fff"
        />
      </View>
    </View>
  );
};

//MINIATURAS CON NOMBRE
const Recipe = ({recipe, navigation, category}) => {
  const toRecipe = () => {
    //eso es para cambiar de pagina a la de las recetas
    //le esta pasando la informacion que va a usar la pagina para renderizar la data
    //es que mira, RecipePage se declaro al inicio, es el nombre de una de las pantallas declaradas
    //asi se pasa a la siguiente pantalla, y solo le agrega parametros que usara
    //si
    navigation.navigate('RecipePage', {
      //navigation es una funcion de navigator para acceder a otras pantallas
      // se va a la screen (recipePage con los parametros de recipe y category).
      recipe: recipe,
      category: category,
    });
  };

  return (
    // retorna imagen y nombre del platillo
    <TouchableHighlight style={styles.recipeContainer} onPress={toRecipe}>
      <View>
        <Image
          style={category == 'Trending' ? styles.recipeImage : styles.size} // aplica un diferente estio segun la categoria
          source={recipeImages[recipe.id].foodImage}
        />
        <Text style={styles.recipeName}>{recipe.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

//recipe container (recibimos los 3 props desde el componente MainPage)
const RecipeContainer = ({navigation, recipes, category}) => {
  //Funcion render para visualizar las recetas llamada por el FlatList
  // va a traer las miniaturas generadas por el componente Recipe que definimos antes (imagen pequeñá con su titulo y en el main page ya las muestra searadas por categoria)
  const renderRecipe = ({item}) => (
    <Recipe navigation={navigation} recipe={item} category={category} />
  );

  return (
    <View>
      {/*Mencionamos la categoria (trending o re) */}
      <Text style={styles.recipesHeaderType}>{category}</Text>
      {/*Imprimos la lista de las recetas de una por una*/}

      <FlatList
        horizontal
        data={recipes} //Se mandan las recetas desde el mainpage (el mainpage las trae del data.json)
        renderItem={renderRecipe} //Se renderiza la funcion renderRecipe que está mas arriba
        keyExtractor={recipes => recipes.title}
      />
    </View>
  );
};

//Componente Principal (HOMEPAGE}
//Recibimos la navegacion y la implementamos
const MainPage = ({navigation}) => {
  return (
    //Retorna los componentes de Input Search, y Trending y Recent
    <View style={styles.body}>
      {/*Componente  Input Search */}
      <InputSearch />

      {/*Componente  RecipeContainer para el Trending */}
      <RecipeContainer
        navigation={navigation} //Para entre las pantallas
        recipes={[recipes[0], recipes[1], recipes[2]]} //Los obtenemos del data.json que importamos al inicio
        category="Trending"
      />

      {/*Componente  RecipeContainer para el Recent */}
      <RecipeContainer
        navigation={navigation} //Para entre las pantallas
        recipes={[recipes[2], recipes[3], recipes[4]]}
        category="Recent"
      />
    </View>
  );
};

export default MainPage;
