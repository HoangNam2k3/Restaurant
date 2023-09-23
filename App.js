import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import OnBoarding from './screens/OnBoarding';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Category from './screens/Category';
import Reservation from './screens/Reservation';
import Search from './screens/Search';
import SingleFood from './screens/SingleFood';
import Order from './screens/Order';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingScreen">
                <Stack.Screen name="LandingScreen" options={{ headerShown: false }} component={LandingScreen} />
                <Stack.Screen name="LogIn" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
                <Stack.Screen name="Reservation" component={Reservation} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Stack.Screen name="SingleFood" component={SingleFood} options={{ headerShown: false }} />
                <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
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
