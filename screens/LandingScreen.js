import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default LandingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/icons8-restaurant-menu-101.png')} />
            <Text style={styles.txt}>Welcome to our restaurant</Text>
            <Text style={{ fontSize: 18, maxWidth: '80%', textAlign: 'center' }}>
                Order food and make reservations with one click.
            </Text>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={[styles.btn, styles.logIn]}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={[styles.btn, styles.singUp]}>
                    <Text style={{ fontSize: 18 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    img: {
        width: 100,
        height: 100,
        tintColor: '#5EA33A',
    },
    txt: {
        color: '#5EA33A',
        fontSize: 20,
        marginVertical: 24,
    },
    btn: {
        width: 300,
        height: 50,
        borderRadius: 999,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logIn: {
        backgroundColor: '#5EA33A',
    },
    singUp: {
        borderWidth: 1,
        borderColor: 'black',
    },
});
