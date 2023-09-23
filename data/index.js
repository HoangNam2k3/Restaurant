export const MENU_DATA = [
    {
        id: 1,
        tit: 'Breakfast',
        src: require('../assets/Breakfast-Box2-CMS.png'),
    },
    {
        id: 2,
        tit: 'Ramen',
        src: require('../assets/ramenMenu.png'),
    },
    {
        id: 3,
        tit: 'Sandwiches',
        src: require('../assets/sandwichMenu.png'),
    },
    {
        id: 4,
        tit: 'Mediterranean',
        src: require('../assets/MediteranneanMenu.png'),
    },
    {
        id: 5,
        tit: 'Japanese',
        src: require('../assets/japanFood.png'),
    },
    {
        id: 6,
        tit: 'Sushi',
        src: require('../assets/sushi-pericoloso.png'),
    },
    {
        id: 7,
        tit: 'New Mexican',
        src: require('../assets/mexican.png'),
    },
    {
        id: 8,
        tit: 'Bar Food',
        src: require('../assets/bar.png'),
    },
    {
        id: 9,
        tit: 'Italian',
        src: require('../assets/italian.png'),
    },
    {
        id: 10,
        tit: 'Burgers',
        src: require('../assets/burger.png'),
    },
];
export const CATE_DATA = [
    {
        id: 1,
        tit: 'Forbidden Salad',
        desc: 'Aioli. Arugula, spinach gorgonzola, cheese, carrots, quinoa, beets',
        src: require('../assets/Forbidden-Rice-Salad-575x262.png'),
        price: 11.0,
    },
    {
        id: 2,
        tit: 'The Dirty Deed',
        desc: 'Signature Fries with Cheddar cheese, grilled onions, bacon and aioli.',
        src: require('../assets/italian.png'),
        price: 8.5,
    },
    {
        id: 3,
        tit: 'Big Burg',
        desc: 'Anchor steam beer battered wild cod fillets with friends. Served with tartar',
        src: require('../assets/burger.png'),
        price: 14.0,
    },
    {
        id: 4,
        tit: 'The Bandit Sandwich',
        desc: 'Medium egg, butchers cut bacon, muenster cheese and avocado.',
        src: require('../assets/sandwichMenu.png'),
        price: 8.5,
    },
    {
        id: 5,
        tit: 'The Deviant Sandwich',
        desc: 'Scrambled eggs, tillamook Cheddar, and chives. Served on a griddled brioche bun, organic free eggs and signature free aioli.',
        src: require('../assets/mexican.png'),
        price: 11.0,
    },
    {
        id: 6,
        tit: 'Red Flag',
        desc: 'Anchor steam beer battered wild cod fillets with friends. Served with tartar',
        src: require('../assets/redflag.png'),
        price: 14.0,
    },
];
export const SLIDE_DATA = [
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
export const ORDER_DATA = [
    {
        id: 1,
        src: require('../assets/od1.png'),
        children: [
            {
                id: 1,
                name: 'Big Burg',
                quantity: 3,
                price: 14.0,
            },
            {
                id: 2,
                name: 'The Dirty Deed',
                quantity: 1,
                price: 8.0,
            },
        ],
    },
    {
        id: 2,
        src: require('../assets/od2.png'),
        children: [
            {
                id: 1,
                name: 'Deviant Sandwich',
                quantity: 1,
                price: 14.0,
            },
            {
                id: 2,
                name: 'Forbidden Salad',
                quantity: 1,
                price: 11.0,
            },
            {
                id: 3,
                name: 'Big Burg',
                quantity: 1,
                price: 14.0,
            },
            {
                id: 4,
                name: 'The Dirty Deed',
                quantity: 1,
                price: 8.0,
            },
        ],
    },
    {
        id: 3,
        src: require('../assets/od3.png'),
        children: [
            {
                id: 1,
                name: 'Deviant Sandwich',
                quantity: 1,
                price: 14.0,
            },
            {
                id: 2,
                name: 'Forbidden Salad',
                quantity: 1,
                price: 11.0,
            },
            {
                id: 3,
                name: 'Big Burg',
                quantity: 1,
                price: 14.0,
            },
            {
                id: 4,
                name: 'The Dirty Deed',
                quantity: 1,
                price: 8.0,
            },
        ],
    },
];
