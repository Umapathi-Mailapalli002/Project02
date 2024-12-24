import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
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
    width:100,
    height:100,
    borderRadius: 5,
    margin: 8
  },
  cardElevated: {
    backgroundColor: '#cad5e2',
    elevation: 4
  },
  
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        paddingHorizontal:8,
    }
})
export default ElevatedCards