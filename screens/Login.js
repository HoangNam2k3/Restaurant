import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const storedEmail = JSON.parse(await AsyncStorage.getItem('email'));
            const storedPassword = JSON.parse(await AsyncStorage.getItem('password'));

            if (email === storedEmail && password === storedPassword) {
                console.log('Login successful');

                navigation.navigate('OnBoarding');
            } else {
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.tit}>Sign In</Text>
                <TextInput
                    style={[styles.inp]}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email or phone number"
                />
                <TextInput style={[styles.inp]} onChangeText={(text) => setPassword(text)} placeholder="Password" />
            </View>
            <View style={styles.marginVer}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'green' }]} onPress={handleLogin}>
                    <Text style={styles.txt}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.textCenter}>OR</Text>
                <TouchableOpacity style={[styles.btn, { backgroundColor: 'blue' }]} onPress={handleLogin}>
                    <Text style={styles.txt}>Facebook Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        // paddingTop: 40,
    },
    backIcon: {},
    tit: {
        // marginTop: 100,
        marginTop: 24,
        marginBottom: 50,
        fontSize: 24,
        color: '#5EA33A',
    },
    txt: {
        fontSize: 18,
        color: '#fff',
    },
    inp: {
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 999,
        marginBottom: 32,
    },
    btn: {
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    marginVer: {
        marginTop: 24,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    textCenter: {
        textAlign: 'center',
        marginVertical: 40,
        fontSize: 20,
    },
});
