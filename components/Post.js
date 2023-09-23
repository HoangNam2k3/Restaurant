import { Image, StyleSheet, Text, View } from 'react-native';

export default function Post({ item }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} resizeMode="cover" source={item.src} />
            <View style={styles.desc}>
                <Text style={styles.fz}>{item.name}</Text>
                <Text style={styles.fz}>${item.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        marginBottom: 24,
    },
    fz: {
        fontSize: 16,
    },
    img: {
        width: '100%',
        height: 200,
        marginBottom: 8,
    },
    desc: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
