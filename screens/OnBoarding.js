import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { SLIDE_DATA } from '../data';

export default function OnBoarding() {
    const navigation = useNavigation();
    const handleDone = async () => {
        await navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <AppIntroSlider data={SLIDE_DATA} renderItem={RenderItem} showSkipButton={true} onDone={handleDone} />
        </View>
    );
}

const RenderItem = ({ item }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 100,
            }}
        >
            <Image style={styles.introImageStyle} source={item.image} />
            <Text style={styles.introTitleStyle}>{item.title}</Text>
            <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    introImageStyle: {
        width: 100,
        height: 100,
        marginBottom: 24,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 24,
    },
});
