/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
Co-authored-by: Namoku <mythemc@gmail.com> 
Co-authored-by: danthek <abraham8507@gmail.com> 
Co-authored-by: xFerchoVJ <fer_elsword@hotmail.com> 
Co-authored-by: Darkboy5120 <hmaldonado0@ucol.mx> 
Co-authored-by: Hugoneytor <halvarez0@ucol.mx> 
 */

import React from 'react';
import MainPage from './src/components/MainPage.js';
import RecipePage from './src/components/RecipePage.js';
import {recipes} from './src/assets/data.json';

const App = () => {
  return (
    // <MainPage/>
    <RecipePage recipe={recipes[0]}/>
  );
};

export default App;
