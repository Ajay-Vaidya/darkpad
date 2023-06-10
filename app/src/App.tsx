import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.landingPageContainer}>
      <Text style={styles.darkpadLogoText}>Darkpad</Text>
      <Pressable
        style={styles.loginButton}
        onPress={() => console.log('Pressed')}>
        <Text style={styles.loginButtonText}>Login With Wattpad</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  landingPageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  darkpadLogoText: {
    fontSize: 40,
    paddingBottom: 10,
  },
  loginButton: {
    backgroundColor: 'skyblue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: 'lightblue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default App;
