import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'
import { Ionicons } from "@expo/vector-icons"
import StarRating from "react-native-star-rating"

const HotelList = ({ card }) => {
  return (
    <View style={styles.containerCard}>
      <Image
        source={{uri: card.img }}
        style={styles.imageHotel}
      />
      <View style={styles.containerSideRight}>
        <View style={styles.containerBodyCard}>
          <View style={styles.titleCardSideRight}>
            <Text style={styles.textTitleCard}>
              { card.name }
            </Text>
            <Ionicons
              name="ios-heart-empty"
              size={25}
              color="#120f0e"
            />
          </View>
          <View style={styles.containerDescriptionCard}>
            <Text style={styles.textDescriptionCard}>
              { card.des }
            </Text>
            <View style={styles.containerStarsRating}>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                starSize={15}
                maxStars={5}
                rating={4.5}
                fullStarColor={'#9e999c'}
                containerStyle={styles.containerStartButton}
              />
            </View>
          </View>
          <View style={styles.containerFooterCard}>
            <View style={styles.alignCenterJustifyCenter}>
              <Text style={styles.textFooterCard}> $ {card.price} /night </Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.containerButtonFooter}>
              <Text style={styles.textButtonFooter}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HotelList;