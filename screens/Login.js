import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

function Login() {
    return ( <View style={styles.container}>
        <View>
            <Text style={styles.tit}>Sign In</Text>
            <TextInput style={[styles.inp, styles.btn]} placeholder="Email or phone number"/>
            <TextInput style={[styles.inp, styles.btn]} placeholder="Password"/>
        </View>
        <View style={styles.marginVer}>
            <View style={styles.btn}>
                <Button color={'#5EA33A'} title="Sign In"/>
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