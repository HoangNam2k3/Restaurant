import { FlatList, StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import StoryItem from '../components/StoryItem';
import SliderItem from '../components/SliderItem';
import Post from '../components/Post';
import Nav from '../components/Nav';
import { MENU_DATA } from '../data';

const STORY_DATA = [
    {
        id: 1,
        tit: 'Breakfast',
        src: require('../assets/breakfast.png'),
    },
    {
        id: 2,
        tit: 'Ramen',
        src: require('../assets/Ramen.png'),
    },
    {
        id: 3,
        tit: 'Sandwiches',
        src: require('../assets/Sandwiches.png'),
    },
    {
        id: 4,
        tit: 'Mediterannean',
        src: require('../assets/Mediterannean.png'),
    },
    {
        id: 5,
        tit: 'Mediterannean',
        src: require('../assets/Mediterannean.png'),
    },
    {
        id: 6,
        tit: 'Mediterannean',
        src: require('../assets/Mediterannean.png'),
    },
    {
        id: 7,
        tit: 'Mediterannean',
        src: require('../assets/Mediterannean.png'),
    },
];
const POST_DATA = [
    {
        id: 1,
        name: 'Forbidden Salad',
        price: 11.0,
        src: require('../assets/Forbidden-Rice-Salad-575x262.png'),
    },
    {
        id: 2,
        name: 'Red Flag',
        price: 14.0,
        src: require('../assets/redflag.png'),
    },
    {
        id: 3,
        name: 'Petty Cash Sandwich',
        price: 16.5,
        src: require('../assets/egg-in-nest-blt-sandwiches-1707p38.png'),
    },
    {
        id: 4,
        name: 'The fancy Sandwich',
        price: 18.5,
        src: require('../assets/fancySw.png'),
    },
];
export default Home = () => {
    return (
        <View style={styles.container}>
            <Nav />
            <ScrollView>
                <Text style={[styles.tit]}>Popular Categories</Text>
                <FlatList
                    style={[styles.slider]}
                    horizontal
                    data={STORY_DATA}
                    renderItem={StoryItem}
                    keyExtractor={(item) => item.id}
                />
                <View>
                    <Text style={[styles.tit]}>Best Details</Text>
                    <View style={{ width: '100%', height: 260 }}>
                        <AppIntroSlider
                            data={MENU_DATA}
                            renderItem={SliderItem}
                            showSkipButton={false}
                            showNextButton={false}
                            showDoneButton={false}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.tit}>Most Popular</Text>
                    <View>
                        {POST_DATA.map((item) => (
                            <Post key={item.id} item={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mt: {
        marginTop: 18,
    },
    container: {
        marginTop: 44,
        marginBottom: 32,
    },
    tit: {
        fontSize: 24,
        marginLeft: 18,
        marginTop: 28,
        marginBottom: 12,
    },
    slider: {},

    img: {
        width: 80,
        height: 80,
    },
});
