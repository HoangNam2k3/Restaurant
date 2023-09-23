import { StyleSheet, Text, View } from 'react-native';
import Nav from '../components/Nav';
import { CATE_DATA } from '../data';
import CateItem from '../components/CateItem';

export default Search = () => {
    return (
        <View style={styles.container}>
            <Nav isSearch />
            <View>
                {CATE_DATA.map((item) => (
                    <CateItem key={item.id} item={item} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ container: { flex: 1, marginVertical: 44 } });
