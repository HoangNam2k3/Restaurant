import { Image, StyleSheet, Text, View } from 'react-native';

export default function StoryItem({ item }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={item.src} />
            <Text style={styles.txt}>{item.tit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginLeft: 15,
    },
    txt: {
        marginTop: 10,
    },
});
