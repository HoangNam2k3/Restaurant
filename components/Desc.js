import { StyleSheet, Text, View } from 'react-native';

export default Desc = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 18 }}>
                <Text
                    style={[
                        styles.txt,
                        {
                            borderWidth: 1,
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            marginRight: 12,
                            color: 'green',
                        },
                    ]}
                >
                    {item.quantity}
                </Text>
                <Text style={styles.txt}>{item.name}</Text>
            </View>
            <Text style={styles.txt}>${item.price}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
    },
});
