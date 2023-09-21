import { FlatList, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Text,View,Image } from "react-native";
import StoryItem from "./StoryItem";
import AppIntroSlider from "react-native-app-intro-slider";
import SliderItem from "./SliderItem";

const STORY_DATA =  [
    {
        id: 1,
        tit: 'Breakfast',
        src: require('../../assets/breakfast.png'),
    },
    {
        id: 2,
        tit: 'Ramen',
        src: require('../../assets/Ramen.png'),
    },
    {
        id: 3,
        tit: 'Sandwiches',
        src: require('../../assets/Sandwiches.png'),
    },
    {
        id: 4,
        tit: 'Mediterannean',
        src: require('../../assets/Mediterannean.png'),
    },
    {
        id: 5,
        tit: 'Mediterannean',
        src: require('../../assets/Mediterannean.png'),
    },
    {
        id: 6,
        tit: 'Mediterannean',
        src: require('../../assets/Mediterannean.png'),
    },
    {
        id: 7,
        tit: 'Mediterannean',
        src: require('../../assets/Mediterannean.png'),
    },

]
const SLIDER_DATA = [
    {
        id: 1,
        tit: 'Ramen',
        src: require('../../assets/Mediterannean.png')
    },
    {
        id: 2,
        tit: 'Ramen',
        src: require('../../assets/IMG_62231.png')
    },
    {
        id: 3,
        tit: 'Ramen',
        src: require('../../assets/IMG_62231.png')
    }
]
function Category() {
    return ( <View style={styles.container}>
        <View style={styles.top}>
            <Image source={require('../../assets/icons8-menu-101.png')}/>
            <Image source={require('../../assets/icons8-shopping-cart-500.png')}/>
        </View>
        <Text style={[styles.tit, styles.mt]}>Popular Categories</Text>
        <FlatList
            style={[styles.slider, styles.mt]}
            horizontal
            data={STORY_DATA}
            renderItem={StoryItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={true}
        />
        <View>
            <Text style={[styles.tit]}>Most Details</Text>
            <View style={{width: '100%', height: 270, marginTop: 18}}>
                <AppIntroSlider
                    data={SLIDER_DATA}
                    renderItem={SliderItem}
                    showSkipButton={false}
                />
            </View>
        </View>

    </View> );
}

export default Category;

const styles = StyleSheet.create({
    mt : {
        marginTop: 18,
    },
    container: {
        marginTop: 44,
    },
    top : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
    },
    tit: {
        fontSize: 24,
        marginLeft: 18,
    },
    slider: {
        marginBottom: 20,
    },
    
    img: {
        width: 80,
        height: 80
    },
    bg: {
        
    },
});