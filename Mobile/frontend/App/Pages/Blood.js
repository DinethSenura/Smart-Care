import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Blood() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blood</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 800, // Adjust as needed
    height: 800, // Adjust as needed
    resizeMode: 'contain',
  },
});
