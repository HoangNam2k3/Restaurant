import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function OnBoarding() {
  return (
    <View style={styles.container}>
        <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            showSkipButton={true}
        />
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
      }}>
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

const slides = [
{
  key: 's1',
  text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
  title: 'Browse  Food',
  image: require('../assets/icons8-restaurant-menu-101.png'),
  backgroundColor: '#20d2bb',
},
{
  key: 's2',
  title: 'FOrder Food',
  text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
  image: require('../assets/icons8-delivery-500.png'),
  backgroundColor: '#febe29',
},
{
  key: 's3',
  title: 'Make Reservations',
  text: 'Book a table in advance to avoid waiting in line',
  image: require('../assets/noun_Calendar_2442157.png'),
  backgroundColor: '#22bcb5',
},
{
  key: 's4',
  title: 'Quick Search',
  text: 'Quickly find food items you like the most',
  image: require('../assets/noun_Binoculars_1107295.png'),
  backgroundColor: '#3395ff',
},
{
  key: 's5',
  title: 'Apple Pay',
  text: 'We know you’re busy, so you can pay with your phone in just one click',
  image: require('../assets/noun_mac_2076879.png'),
  backgroundColor: '#f6437b',
},
];
