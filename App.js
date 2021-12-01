/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
Co-authored-by: Namoku <mythemc@gmail.com> 
Co-authored-by: xFerchoVJ <fer_elsword@hotmail.com> 
Co-authored-by: Darkboy5120 <hmaldonado0@ucol.mx> 
Co-authored-by: Hugoneytor <halvarez0@ucol.mx> 
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InputSearch = () => {
  return (
    <View>
      <Text>
        Hola pepe
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.body}>
      <InputSearch/>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(50, 50, 50)',
    padding: 20,
    flex: 1,
  },
});

export default App;
