import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Desc from './Desc';

export default OrderItem = ({ item }) => {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let newTotal = 0;
        item.children.forEach((itemChildren) => {
            newTotal += itemChildren.price * itemChildren.quantity;
        });

        setTotal(newTotal);
    }, [item.children]);
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 125 }}>
                <Image
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    source={item.src || require('../assets/od1.png')}
                    resizeMode="cover"
                />
                <View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}
                />
            </View>
            <View style={{ marginTop: 24, gap: 24 }}>
                {item.children.map((itemChildren) => (
                    <Desc key={itemChildren.id} item={itemChildren} />
                ))}
                <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={styles.txt}>Total: ${total}</Text>
                    <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 4 }}>
                        <Text
                            style={{
                                color: '#fff',
                                paddingVertical: 8,
                                textTransform: 'uppercase',
                                paddingHorizontal: 28,
                                fontSize: 17,
                            }}
                        >
                            Reorder
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: { marginHorizontal: 18 },
    txt: {
        fontSize: 20,
    },
});
