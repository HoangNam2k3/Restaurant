import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
          // Stringify email and password before storing
          const emailString = JSON.stringify(email);
          const passwordString = JSON.stringify(password);
    
          await AsyncStorage.setItem('email', emailString);
          await AsyncStorage.setItem('password', passwordString);
    
          console.log('Email and password stored successfully:', email, password);
        } catch (error) {
          console.error('Error signing up:', error);
        }
      };
    return ( <View style={styles.container}>
        <Text style={styles.tit}>Create new account</Text>
        <TextInput style={styles.inp} placeholder="Full Name"/>
        <TextInput style={styles.inp} placeholder="Phone Number"/>
        <TextInput keyboardType="email-address" style={styles.inp} onChangeText={(text)=>setEmail(text)} placeholder="Email Address"/>
        <TextInput keyboardType="visible-password" style={styles.inp} onChangeText={(text) => setPassword(text)} placeholder="Password"/>

        <View style={styles.btn}>
        <Button color={'red'} onPress={handleSignUp} title="Sign Up" />
        </View>
    </View> );
}

export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    tit: {
        // marginTop: 120,
        marginTop: 24,
        width: '100%',
        fontSize: 24,
        color: '#5EA33A',
        marginBottom: 32,
    },
    inp: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 999
    },
    btn: {
        width: '100%',
        borderRadius: 999 ,
        overflow: 'hidden',
    }
});