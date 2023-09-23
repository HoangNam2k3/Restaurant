import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Nav from '../components/Nav';

export default Reservation = () => {
    return (
        <View style={styles.container}>
            <Nav tit={'Reservations'} />
            <View>
                <Image style={{ width: '100%', height: 230 }} source={require('../assets/brazilianSteakHouse.png')} />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 28 }}>
                    <Text style={{ fontSize: 22 }}>Brazilian Steak House</Text>
                    <Text style={{ color: '#4A4A4A', fontSize: 17 }}>777 Steiner Street, San Francisco, CA, 94115</Text>
                </View>
                <View style={{ marginHorizontal: 28 }}>
                    <TextInput style={styles.inp} placeholder="First Name" />
                    <TextInput style={styles.inp} placeholder="First Name" />
                    <TextInput style={styles.inp} placeholder="Phone Number" />
                    <TextInput style={styles.inp} placeholder="Reservation Details" />

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Make Reservation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    inp: { height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 18, marginBottom: 18, paddingLeft: 12 },
    container: { marginVertical: 44 },
    btn: {
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
});
