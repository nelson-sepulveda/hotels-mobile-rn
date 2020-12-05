import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 50
  },
  containerIconHeader: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  lineOne: {
    width: 27,
    height:1,
    borderBottomWidth: 3.6,
    marginBottom: 5,
    borderRadius: 2
  },
  lineTwo: {
    width: 16,
    height: 1,
    borderBottomWidth: 3,
    borderRadius: 2
  },
  containerHeader :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35
  },
  textHeader: {
    fontFamily: 'SegoeRegular',
    fontSize: 25,
    fontWeight: '600'
  },
  iconSearch: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHotels: {
    color: '#695ed8'
  },
  containerButtonsPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonPrice: {
    marginTop: 35,
    borderWidth: 1.5,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#c3c3c5',
    width: '22%',
    borderRadius: 5
  },
  buttonPriceSelected: {
    backgroundColor: '#695ed8'
  },
  textButtonPriceSelected: {
    color: '#fcfbfa'
  },
  textButtonPrice: {
    fontFamily: 'SegoeRegular',
    fontSize: 10,
    color: '#c3c3c5',
    fontWeight: 'bold',
  },
  containerTopRated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: 35
  },
  textTopRated: {
    fontFamily: 'SegoeRegular',
    fontSize: 25,
    fontWeight: '600'
  },
  containerTextSeeAll: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSeeAll: {
    fontFamily: 'SegoeRegular',
    color: '#695ed8',
    fontSize: 17,
    fontWeight: '500'
  },
  itemSeparatorColumn: {
    marginVertical: 20
  },
  containerCard: {
    width: '100%',
    flexDirection: 'row'
  },
  imageHotel: {
    width: '38%',
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  containerSideRight: {
    width: '62%',
    backgroundColor: '#f4f4f3',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column'
  },
  containerBodyCard: {
    marginHorizontal: 10,
    marginTop: 10
  },
  titleCardSideRight: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textTitleCard: {
    fontFamily: 'SegoeRegular',
    fontWeight: '700',
    fontSize: 19,
    color: '#120f0e'
  },
  containerDescriptionCard: {
    height: 40,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 15
  },
  textDescriptionCard: {
    fontSize: 12.5,
    fontFamily: 'SegoeRegular',
    color: '#9e999c'
  },
  containerFooterCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alignCenterJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFooterCard: {
    fontFamily: 'SegoeRegular',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#120f0e'
  },
  containerButtonFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
    width: 90,
    borderRadius: 35,
    backgroundColor: '#695ed8'
  },
  textButtonFooter: {
    color: '#fcfbfa'
  },
  containerStarsRating: {
    marginTop: 15
  },
  containerStartButton: {
    marginRight: 100 
  }
})

export default styles