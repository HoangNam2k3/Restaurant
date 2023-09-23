import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Nav = ({ tit, isSearch = false }) => {
    const navigation = useNavigation();
    const [txt, setText] = useState('');
    const [isClose, setClose] = useState(false);

    const handleTextChange = (txt) => {
        setText(txt);
        setClose(txt !== '');
    };

    useEffect(() => {
        setClose(txt !== '');
    }, [txt, isClose]);
    return (
        <View style={styles.container}>
            <Image style={styles.bl} source={require('../assets/icons8-menu-101.png')} />
            {tit && <Text style={styles.tit}>{tit}</Text>}
            {isSearch && (
                <View style={styles.search}>
                    <View style={styles.searchInp}>
                        <Image style={[styles.img, styles.mr]} source={require('../assets/search.png')} />
                        <TextInput
                            onChangeText={handleTextChange}
                            value={txt}
                            style={{ flex: 1, fontSize: 18 }}
                            placeholder="Search"
                        />

                        {isClose && (
                            <TouchableOpacity onPress={() => setText('')}>
                                <Image style={styles.img} source={require('../assets/close.png')} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Image style={styles.bl} source={require('../assets/icons8-shopping-cart-500.png')} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        marginBottom: 12,
    },
    mr: {
        marginRight: 8,
    },
    bl: {
        tintColor: 'black',
    },
    tit: {
        fontSize: 18,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 24,
    },
    searchInp: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
        borderRadius: 999,
    },
    img: { width: 24, height: 24, tintColor: 'black' },
});
