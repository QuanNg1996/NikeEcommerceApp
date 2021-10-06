import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images, icons, COLORS, FONTS, SIZES } from '../constants'
import { Svg, Polygon } from 'react-native-svg';


const Home = () => {

  // Dummy Data
  const [trending, setTrending] = useState([
    {
      id: 0,
      name: "Nike Metcon 4",
      img: images.nikeMetcon4,
      bgColor: "#414045",
      type: "TRAINING",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 1,
      name: "Nike Metcon 6",
      img: images.nikeMetcon6,
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11]
    },
    {
      id: 2,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Purple,
      bgColor: "#2B4660",
      type: "TRAINING",
      price: "$124",
      sizes: [6, 7, 8, 9]
    },
    {
      id: 3,
      name: "Nike Metcon 3",
      img: images.nikeMetcon3,
      bgColor: "#A69285",
      type: "TRAINING",
      price: "$99",
      sizes: [6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
      id: 4,
      name: "Nike Metcon Free",
      img: images.nikeMetconFree,
      bgColor: "#A02E41",
      type: "TRAINING",
      price: "$108",
      sizes: [6, 7, 8, 9, 10, 11]
    },
  ]);

  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      id: 0,
      name: "Nike Metcon 4",
      img: images.nikeMetcon4,
      bgColor: "#414045",
      type: "TRAINING",
      price: "$119",
      sizes: [6, 7, 8]
    },
    {
      id: 1,
      name: "Nike Metcon 6",
      img: images.nikeMetcon6,
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11]
    },
    {
      id: 2,
      name: "Nike Metcon 5",
      img: images.nikeMetcon5Purple,
      bgColor: "#2B4660",
      type: "TRAINING",
      price: "$124",
      sizes: [6, 7, 8, 9]
    },
  ]);

  const renderTrendingShoes = (item, index) => {
    let trendingStyle = {};

    if (index === 0) {
      trendingStyle = { marginLeft: SIZES.padding }
    }

    return (
      <TouchableOpacity
        style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base}}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.H5 }}>{item.type}</Text>
        <View style={[{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: SIZES.base,
          borderRadius: 10,
          marginRight: SIZES.padding,
          backgroundColor: item.bgColor,
          paddingLeft: SIZES.radius,
          paddingRight: SIZES.padding,
          paddingBottom: SIZES.radius,
        }, styles.trendingShadow]}>
          <View style={{ height: '35%', justifyContent: 'space-between' }}> 
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
          </View>
        </View>

        <View style={{ position: 'absolute', top: 27, right: 0, width: "95%" }}>
          <Svg height="100%" width="100%">
            <Polygon 
              points="0,0 160,0 160,80"
              fill="white"
            />
          </Svg>
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            transform: [
              { rotate: '-15deg'},
            ]
          }}
        />        
      </TouchableOpacity>
    )
  }

  const renderRecentlyViewed = (item, index) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row'}}
        onPress={() => {
          console.log("renderRecentlyViewed");
        }}
      >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Image 
            source={item.img}
            resizeMode="contain"
            style={{
              width: 130,
              height: 100,
            }}
          />
        </View>
        <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <Text
        style={{ 
          marginTop: SIZES.radius, 
          marginHorizontal: SIZES.padding, 
          ...FONTS.largeTitleBold 
        }}
      >
          Trending
      </Text>
      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>
      <View
        style={[{
          flex: 1,
          flexDirection: 'row',
          marginTop: SIZES.padding,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white
        }, styles.recentContainerShadow]}
      >
        <View style={{ width: 70, marginLeft: SIZES.base }}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>         
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  recentContainerShadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default Home;