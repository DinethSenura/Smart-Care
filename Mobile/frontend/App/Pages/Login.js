import { ImageBackground, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'

export default function BackgroundWithImages({ navigation }) {
  return (
    <ImageBackground
      source={require('./../../assets/background.png')}
      style={styles.backgroundImage}
    >
      {/* Top-left image */}
      <Image
        source={require('./../../assets/smartcare.png')}
        style={styles.topLeftImage}
      />
      
      {/* Bottom-center image */}
      <Image
        source={require('./../../assets/header.png')}
        style={styles.bottomCenterImage}
      />

      {/* Button container to center the buttons */}
      <View style={styles.buttonContainer}>
        {/* Login Button */}
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Button */}
        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  topLeftImage: {
    position: 'absolute',
    top: 20,
    left: -20,
    width: 250,
    height: 250,
  },
  bottomCenterImage: {
    position: 'absolute',
    top: '515',
    width: '95%',
    height: 300,
    resizeMode: 'contain',
    left: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: '49%', // Start the container from the vertical center
    left: '55%', // Center the container horizontally
    transform: [{ translateX: -150 }, { translateY: -50 }], // Adjust the container's position for perfect centering
    width: '75%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#007bff', // Blue color for Login button
  },
  signupButton: {
    backgroundColor: '#28a745', // Green color for Signup button
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 10, // Space between the icon and text
  },
});
