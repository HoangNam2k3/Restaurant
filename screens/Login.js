import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
          const storedEmail = JSON.parse(await AsyncStorage.getItem('email'));
          const storedPassword = JSON.parse(await AsyncStorage.getItem('password'));
      
          if (email === storedEmail && password === storedPassword) {
            console.log('Login successful');
          } else {
            console.log('Invalid credentials');
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
      

    return ( <View style={styles.container}>
        <View>
            <Text style={styles.tit}>Sign In</Text>
            <TextInput style={[styles.inp, styles.btn]} onChangeText={(text) => setEmail(text)} placeholder="Email or phone number"/>
            <TextInput style={[styles.inp, styles.btn]} onChangeText={(text)=>setPassword(text)} placeholder="Password"/>
        </View>
        <View style={styles.marginVer}>
            <View style={styles.btn}>
                <Button color={'#5EA33A'} onPress={handleLogin} title="Sign In"/>
            </View>
            <Text style={styles.textCenter}>OR</Text>
            <View style={styles.btn}>
                <Button color={'blue'} title="Facebook Login"/>
            </View>
        </View>
    </View> );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        // paddingTop: 40,
    },
    backIcon: {
    },
    tit: {
        // marginTop: 100,
        marginTop: 24,
        marginBottom: 50,
        fontSize: 24,
        color: '#5EA33A',
    },
    inp: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 20
    },
    btn: {
        borderRadius: 999,
        overflow: 'hidden',
    },
    marginVer: {
        marginTop: 24,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    textCenter: {
        textAlign: 'center',
        marginVertical: 40
    }
});