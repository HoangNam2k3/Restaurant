import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CateItem from '../components/CateItem';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATE_DATA } from '../data';
import TopBack from '../components/TopBack';

export default Category = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TopBack name={'Sandwiches'} />
            <ScrollView>
                {CATE_DATA.map((item) => (
                    <View key={item.id} style={{ backgroundColor: '#D8D8D8' }}>
                        <CateItem item={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginVertical: 32 },
});
