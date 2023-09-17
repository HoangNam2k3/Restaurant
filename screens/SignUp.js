import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function SignUp() {
    return ( <View style={styles.container}>
        <Text style={styles.tit}>Create new account</Text>
        <TextInput style={styles.inp} placeholder="Full Name"/>
        <TextInput style={styles.inp} placeholder="Phone Number"/>
        <TextInput keyboardType="email-address" style={styles.inp} placeholder="Email Address"/>
        <TextInput keyboardType="visible-password" style={styles.inp} placeholder="Password"/>

        <View style={styles.btn}>
            <Button color={'red'} title="Sign Up"/>
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