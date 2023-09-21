import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function SliderItem({item}) {
    return ( 
        <View style={styles.container}>
            <ImageBackground style={styles.bgImg} source={item.src} resizeMode="cover" >
                <Text style={styles.tit}>{item.tit}</Text>
            </ImageBackground>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tit: {
        fontSize: 24,
        color: '#fff'
    },
    bgImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});