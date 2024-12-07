import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('User Info:', { username, email, password });
    alert('Sign-Up Successful!');
  };

  const handleFacebookSignup = () => {
    alert('Sign-Up with Facebook!');
  };

  const handleGoogleSignup = () => {
    alert('Sign-Up with Google!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Sign-Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Or Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Facebook Button */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={handleFacebookSignup}>
        <Image source={require('./../../assets/facebook-logo.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      {/* Google Button */}
      <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={handleGoogleSignup}>
        <Image source={require('./../../assets/google-logo.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => console.log('Navigate to Login')}>
          Log In
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
  signupButton: {
    backgroundColor: '#007bff',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signupButtonText: {
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
    left:'20%',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    left:'20%',
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
