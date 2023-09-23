import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default TopBack = ({ tit = 'Back', name }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 80 }}
                onPress={() => navigation.goBack()}
            >
                <Image source={require('../assets/noun_back_2392166.png')} />
                <Text style={{ color: '#4A4A4A', fontSize: 20, marginLeft: -8 }}>{tit}</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, textAlign: 'center' }}>{name && <Text style={{ fontSize: 20 }}>{name}</Text>}</View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', paddingVertical: 24 },
});
