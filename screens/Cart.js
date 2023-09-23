import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBack from '../components/TopBack';
import Desc from '../components/Desc';
import { ORDER_DATA } from '../data';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
export default Cart = () => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let newTotal = 0;
        ORDER_DATA[1].children.forEach((item) => {
            newTotal += item.price * item.quantity;
        });

        setTotal(newTotal);
    }, []);
    return (
        <View style={styles.container}>
            <TopBack tit="Back" name={'Your Cart'} />
            <ScrollView>
                <View style={{ gap: 24, marginRight: 18 }}>
                    {ORDER_DATA[1].children.map((item) => (
                        <Desc key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 18,
                    borderTopWidth: 1,
                    marginTop: 32,
                    paddingVertical: 18,
                    marginBottom: 48,
                }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Total</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>${total}</Text>
            </View>
            <TouchableOpacity style={[styles.fixedButtonContainer, styles.placeOrderButton]}>
                <Text style={{ textTransform: 'uppercase', paddingVertical: 12, fontSize: 18, color: '#fff' }}>
                    Place Order
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: { marginVertical: 44, flex: 1 },
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        elevation: 5,
    },
    placeOrderButton: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
});
