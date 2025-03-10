import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import pages
import LogInScreen from './App/Pages/Login';
import HomeScreen from './App/Pages/Home'
import SignupScreen from './App/Pages/Signup'
import BloodScreen from './App/Pages/Blood'
import EmergencyScreen from './App/Pages/Emergency'
import ResourcesScreen from './App/Pages/Resources'
import WoundScreen from './App/Pages/Wound'
// import Screen from './App/Pages/Wound'
import CareersScreen from './App/Pages/Careers'
import AboutScreen from './App/Pages/About'
import ContactScreen from './App/Pages/Contact'
import SignInScreen from './App/Pages/Signin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Blood" component={BloodScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Wound" component={WoundScreen} />
        {/* <Stack.Screen name="Wound" component={WoundScreen} /> */}
        <Stack.Screen name="Careers" component={CareersScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Signin" component={SignInScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
 
  
//   return (
//     <View style={styles.container}>
//       <Login/>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
