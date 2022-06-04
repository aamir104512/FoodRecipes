import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../colors/Colors';
import Carousel from 'react-native-snap-carousel';
import Banner from '../components/Banner';
import PopularDishes from '../components/PopularDishes';

export default function HomeScreen() {
  // Getting Dimensions to use in Carousel width
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  //   renderItem function to render crousel items from component banner
  const renderItem = ({item, index}) => {
    return <Banner data={item} />;
  };

  const renderDishes = ({item, index}) => {
    return <PopularDishes data={item} />;
  };

  //   data to set in the Carousel
  const [data, setData] = useState([
    {
      title: 'Cherry Smoothie',
      description:
        'A healthy morning drink that tastes like a cherry pie smoothie.',
      image: require('../images/cherrySmoothie.jpg'),
      ingredients:
        'Oat milk\nAlmond butter\nCocoa powder\nVanilla extract\nDark sweet cherries\nBrown sugar',
    },
    {
      title: 'Chicken & White Bean Stew',
      image: require('../images/whiteBean.jpg'),
      description:
        'This load-and-go slow-cooker chicken recipe is perfect for a busy weeknight dinner.',
      ingredients:
        'Cannellini beans\nChicken broth\nOnion\nCarrots\nRosemary\nCheese\nChicken breasts\nKale\nLemon juice\nSalt\nPepper\nOlive oil\nParsley leaves',
    },
    {
      title: 'Matcha Oats with Berries',
      image: require('../images/machaOats.png'),
      description:
        'Blueberries and raspberries top these matcha oats for a quick breakfast.',
      ingredients:
        'Nonfat milk\nOld-fashioned oats\nMatcha powder\nChia seeds\nPure maple syrup\nBlueberries\nRaspberries\nSalt\nSliced almonds',
    },
    {
      title: 'Cinnamon-Roll Oats',
      image: require('../images/cinamon.jpg'),
      description:
        'A grab-and-go breakfasts on hand which takes minutes to assemble. ',
      ingredients:
        'Unsweetened nondairy milk\nOats\nLight brown sugar\nVanilla extract\nCinnamon\nSalt',
    },
    {
      title: 'Farro Porridge',
      image: require('../images/farro.jpg'),
      description:
        'Farro is a type of wheat with a wonderful nutty flavor and toothsome texture. ',
      ingredients: 'Unsweetened oat milk\nFarro\nSalt',
    },
    {
      title: 'Green Smoothie',
      image: require('../images/green.jpg'),
      description:
        'Get your daily dose of dark leafy greens any time of day with this delicious green smoothie. ',
      ingredients:
        'Ripe banana\nbaby kale\nunsweetened vanilla almond milk\nripe avocado\nchia seeds\nhoney\nice cubes',
    },
    {
      title: 'Grilled Chicken Kabab',
      image: require('../images/grilledKabab.jpg'),
      description:
        'Kebabs are a healthier fast food because they are not deep-fried and include bread and salad.',
      ingredients:
        'Greek yogurt\nChicken\nOlive oil\nPaprika\nCumin\nCinnamon\nRed pepper\nLemon\nLemon juice\nSalt\nBlack pepper\nRed onion',
    },
  ]);

  const [dishes, setDishes] = useState([
    {
      title: 'Chinese recipes',
      image: require('../images/chinese.png'),
    },
    {
      title: 'Pakistani recipes',
      image: require('../images/pakistani.jpg'),
    },
    {
      title: 'Italian recipes',
      image: require('../images/italian.jpg'),
    },
    {
      title: 'French recipes',
      image: require('../images/french.png'),
    },
  ]);
  return (
    <View style={styles.container}>
      {/* View for burger menu and user icon */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/burger.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondView}>
          <Image
            source={require('../images/user.png')}
            style={styles.menuImage}
          />
        </TouchableOpacity>
      </View>

      {/* header and subheader text */}

      <View style={styles.headerView}>
        <Text style={{color: Colors.white, fontSize: 40, fontWeight: 'bold'}}>
          Types of recipes
        </Text>
        <Text style={{color: Colors.white, fontSize: 20, marginTop: 10}}>
          Try the best recipes in the world
        </Text>
      </View>

      {/* crousel after the subheading */}

      <View>
        <Carousel
          layout="default"
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth - 40}
          itemWidth={220}
        />
      </View>

      {/* Popular dishes header section  */}

      <View style={styles.dishesHeader}>
        <Text style={{color: Colors.white, fontSize: 16, fontWeight: 'bold'}}>
          Popular Dishes
        </Text>
        <TouchableOpacity>
          <Text style={{color: Colors.buttons, fontWeight: 'bold'}}>
            See more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Popular dishes crousel */}

      <View>
        <Carousel
          layout="default"
          data={dishes}
          renderItem={renderDishes}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    padding: 20,
  },
  menu: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  menuImage: {
    height: 25,
    width: 25,
  },
  secondView: {
    height: 45,
    width: 45,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  headerView: {
    marginTop: 30,
  },
  dishesHeader: {
    marginTop: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
