import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import ReviewCard from '../components/ReviewCard';

const ProductDetailsScreen = (props) => {
  const item = props.route.params.item
  const navigation = useNavigation()
  console.log((item))
  const onPressBuyIt = () => {
    Alert.alert('Confirmation')
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header BGColor={'#00e277'}
          rightComponent={
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Image source={require('../assets/exit.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
          }
          mainText={'Product Details'}
        />
        <ImageBackground
          style={styles.image}
          resizeMode="stretch"
          source={{
            uri: item.thumbnail,
          }}
        />
        <View style={styles.description}>
          <View style={styles.row}>
            <View>
              <Text>{item.title}</Text>
              <Text>BY {item.brand}</Text>
            </View>
            <Text style={{ fontSize: 25 }}>$ 499</Text>
          </View>
          <Text style={{ marginTop: 15 }}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => { onPressBuyIt() }} style={styles.button}>
          <Text>Buy it</Text>
        </TouchableOpacity>
        <View style={styles.review}>
          <Text style={{ color: 'green', fontSize: 30 }}>{item.rating.toFixed(1)}</Text>
          <View style={styles.stars}>
            <Text>Stars</Text>
            <Text>Based on customers reviews</Text>
          </View>
        </View>
        <FlatList
          data={reviews}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ReviewCard item={item} />
            );
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  image: {
    justifyContent: 'center',
    height: 300,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    margin: 20,
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  review: {
    margin: 20,
    flexDirection: 'row',
  },
  stars: {
    marginLeft: 10,
  },
});

const reviews = [
  {
    id: 1,
    header: 'Nice Product',
    stars: 3,
    name: 'regina Joplin',
    date: 'October 2th 2028',
    description:
      'In cillum sint aliquip aliqua ea qui officia dolor elit labore esse adipisicing.',
  },
  {
    id: 2,
    header: 'Nice Product',
    stars: 3,
    name: 'regina Joplin',
    date: 'October 2th 2028',
    description:
      'In cillum sint aliquip aliqua ea qui officia dolor elit labore esse adipisicing.',
  },
  {
    id: 3,
    header: 'Nice Product',
    stars: 3,
    name: 'regina Joplin',
    date: 'October 2th 2028',
    description:
      'In cillum sint aliquip aliqua ea qui officia dolor elit labore esse adipisicing.',
  },
];
