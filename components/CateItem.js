import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default CateItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SingleFood')} style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.tit}>{item.tit}</Text>
                <Text style={{ marginVertical: 12, color: '#4A4A4A' }}>{item.desc}</Text>
                <Text style={{ color: '#4A4A4A', fontSize: 18 }}>${item.price.toFixed(2)}</Text>
            </View>
            <View>
                <Image style={styles.img} source={item.src} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
    },
    main: {
        maxWidth: '70%',
    },
    img: {
        width: 120,
        height: 120,
    },
    tit: {
        fontSize: 20,
        color: '#4A4A4A',
    },
});
