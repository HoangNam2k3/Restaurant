import { ScrollView, StyleSheet, View } from 'react-native';
import Nav from '../components/Nav';
import OrderItem from '../components/OrderItem';
import { ORDER_DATA } from '../data';
export default Order = () => {
    return (
        <View style={styles.container}>
            <Nav tit={'Order'} />
            <ScrollView>
                <View style={{ gap: 32 }}>
                    {ORDER_DATA.map((item) => (
                        <OrderItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({ container: { marginVertical: 44 } });
