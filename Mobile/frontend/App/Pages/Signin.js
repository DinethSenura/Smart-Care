import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('User Info:', { email, password });
    alert('Sign-In Successful!');
    navigation.navigate('Home'); // Navigate to Home page
  };

  const handleFacebookSignIn = () => {
    alert('Sign-In with Facebook!');
  };

  const handleGoogleSignIn = () => {
    alert('Sign-In with Google!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={handleFacebookSignIn}>
        <Image source={require('./../../assets/facebook-logo.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={handleGoogleSignIn}>
        <Image source={require('./../../assets/google-logo.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign In with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#c7c6c3',
  },
  socialIcon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
    left: '20%',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    left: '20%',
  },
  footerText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
