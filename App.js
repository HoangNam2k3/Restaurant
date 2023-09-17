import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/OnBoarding';
import LandingScreen from './screens/LandingScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();



export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LandingScreen'>
          <Stack.Screen name='LandingScreen' options={{ headerShown: false }} component={LandingScreen}/>
          <Stack.Screen name='LogIn' component={Login}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
