import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

function LandingScreen() {
    const navigation = useNavigation();
    return ( 
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/icons8-restaurant-menu-101.png')}/>
            <Text style = {styles.txt}>Welcome to our restaurant</Text>
            <Text>Order food and make reservations with one click.</Text>
            <View>
                <View style={styles.btn}>
                    <Button color={'#20d2bb'}  title="Login In" onPress={()=>navigation.navigate("LogIn")}/>
                </View>
                <View style={[styles.btn, styles.singUp]} >
                    <Button color={'#5EA33A'} title="Sign Up" onPress={()=>navigation.navigate("SignUp")}/>
                </View>
            </View>
        </View>
     );
}

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#5EA33A',
        width: '100%',
    },
    img: {
        width: 80,
        height: 80,
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 24,
    },
    btn: {
        width: 300,
        overflow: "hidden",
        borderRadius: 999,
        marginTop: 24,
    },
    singUp: {
        borderWidth: 1,
        borderColor: 'black',
    }
    
});