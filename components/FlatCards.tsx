import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
              <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
              <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
              <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
              <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding:8,
    overflow: 'scroll'
  },
  card: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width:110,
    height:100,
    borderRadius: 5,
    margin: 8
  },
  cardOne: {
    backgroundColor: "#ef5354",
  },
  cardTwo: {
    backgroundColor: "#50dbb4",
  },
  cardThree: {
    backgroundColor: "#5da3fa",
  },
  
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        paddingHorizontal:8,
    }
})
export default FlatCards;