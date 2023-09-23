import { StyleSheet, View } from 'react-native';

import TopBack from '../components/TopBack';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default SingleFood = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <View style={styles.container}>
            <TopBack tit="Breakfast" name={DATA.name} />
            <View style={{ paddingHorizontal: 18 }}>
                <Text style={{ fontSize: 18, marginBottom: 18 }}>Forbidden Salad</Text>
                <Image style={{ width: '100%', height: 230 }} source={DATA.src} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {DATA.children.map((item) => (
                        <Image style={{ width: 85, height: 50, marginVertical: 18 }} key={item.id} source={item.src} />
                    ))}
                </View>
                <Text style={{ fontSize: 17 }}>{DATA.desc}</Text>

                <View style={{ alignItems: 'center', marginBottom: 18, marginTop: 42 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 999,
                            overflow: 'hidden',
                            borderColor: 'black',
                            borderWidth: 1,
                            width: 120,
                            height: 50,
                            justifyContent: 'center',
                        }}
                    >
                        <TouchableOpacity onPress={decreaseQuantity}>
                            <Text style={{ fontSize: 24, padding: 8 }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 24, marginHorizontal: 10 }}>{quantity}</Text>
                        <TouchableOpacity onPress={increaseQuantity}>
                            <Text style={{ fontSize: 24, padding: 8 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        style={{
                            fontSize: 24,
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: '#000',
                            padding: 8,
                            marginRight: 12,
                        }}
                    >
                        ${(DATA.price * quantity).toFixed(2)}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',
                            borderRadius: 8,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 18, color: '#fff' }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ container: { marginVertical: 44 } });
const DATA = {
    name: 'Forbidden Salad',
    src: require('../assets/Forbidden-Rice-Salad-575x262.png'),
    children: [
        {
            id: 1,
            src: require('../assets/Forbidden-Rice-Salad-575x262.png'),
        },
        {
            id: 2,
            src: require('../assets/sg2.png'),
        },
        {
            id: 3,
            src: require('../assets/sg3.png'),
        },
        {
            id: 4,
            src: require('../assets/sg4.png'),
        },
    ],
    desc: 'Aioli. Arugula, spinach gorgonzola, cheese, carrots, quinoa, beets',
    price: 11.0,
};
