import { StyleSheet, View } from 'react-native';
import Nav from '../components/Nav';
import { MENU_DATA } from '../data';
import SliderItem from '../components/SliderItem';

export default Menu = () => {
    return (
        <View style={styles.container}>
            <Nav tit={'Menu'} />
            <View style={styles.main}>
                {MENU_DATA.map((item) => (
                    <View key={item.id} style={styles.menuItem}>
                        <SliderItem item={item} />
                    </View>
                ))}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: 44,
        flex: 1,
    },
    main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
        margin: 18,
    },
    menuItem: {
        height: 130,
        width: '48%',
    },
});
