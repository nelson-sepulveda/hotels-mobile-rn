import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import React from 'react';
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useFonts } from "@use-expo/font"
import hotelsFonts from "./fonts/fonts"
import styles from "./styles/styles"
import { EvilIcons } from "@expo/vector-icons"
import HotelList from './components/hotelList'

export default function App() {
  const cards = [
    {
      name: 'Piccadily Hotel',
      price: '30',
      des: 'Description de Piccadily',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrGI5KcZMQu6WcU9wrzuxl25SZsqNR6MGbQ&usqp=CAU'
    }, 
    {
      name: 'Ibis Hotel',
      price: '15',
      des: 'Description de Hotel Ibis',
      img: 'https://pbs.twimg.com/profile_images/618767460787953664/PaJm0guw_400x400.jpg'
    },
    {
      name: 'The Suryaa Hotel',
      price: '30',
      des: 'Description de Hotel Suryaa',
      img: 'https://farm7.static.flickr.com/6170/6180554906_feb68504e4_o.jpg'
    },
    {
      name: 'The Grand Hotel',
      price: '30',
      des: 'Description de The Grand Hotel',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BhOCme2m9vOzv4BTxnXIfW2dtEdMwxwJUw&usqp=CAU'
    },
    {
      name: 'Hotel Plaza',
      price: '100',
      des: 'Description de Hotel Plaza',
      img: 'https://i.blogs.es/51812e/burjalarab/450_1000.jpg'
    }
  ]
  const [isLoadedFonts] = useFonts(hotelsFonts);
  if (!isLoadedFonts) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerIconHeader}>
          <View style={styles.lineOne} />
          <View style={styles.lineTwo} />
        </View>
        <View style={styles.containerHeader}>
          <View>
            <Text style={styles.textHeader}>Hello Aman,</Text>
            <Text style={styles.textHeader}>Looking for
              <Text style={styles.textHotels}> Hotels?</Text>
            </Text>
          </View>
          <View style={styles.iconSearch}>
            <EvilIcons name="search" size={38} color="#120f0e" />
          </View>
        </View>
        <View style={styles.containerButtonsPrice}>
          <TouchableOpacity activeOpacity={0.6} style={[styles.buttonPrice, styles.buttonPriceSelected]}>
            <Text style={[styles.textButtonPrice, styles.textButtonPriceSelected]}>Top Rated</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonPrice}>
            <Text style={styles.textButtonPrice}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonPrice}>
            <Text style={styles.textButtonPrice}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonPrice}>
            <Text style={styles.textButtonPrice}>Low Price</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTopRated}>
          <Text style={styles.textTopRated}>Top Rated</Text>
          <View style={styles.containerTextSeeAll}>
            <Text style={styles.textSeeAll}>See All</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemSeparatorColumn}></View>
            }}
            numColumns={1}
            data={cards}
            renderItem={({ item }) => { return ( <HotelList card={item} /> )}}
            keyExtractor={item => item.name}
          />
        </View>        
        <StatusBar style="auto" />
      </View>
    );
  }
}
