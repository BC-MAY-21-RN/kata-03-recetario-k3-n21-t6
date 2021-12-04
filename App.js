/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
Co-authored-by: Namoku <mythemc@gmail.com> 
Co-authored-by: danthek <abraham8507@gmail.com> 
Co-authored-by: Darkboy5120 <hmaldonado0@ucol.mx> 
Co-authored-by: Hugoneytor <halvarez0@ucol.mx> 
*/

import MainPage from './src/components/MainPage.js';
import RecipePage from './src/components/RecipePage.js';
import {recipes} from './src/assets/data.json';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return <RecipePage recipe={recipes[2]} />;
};

export default App;

//Now, we need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:
