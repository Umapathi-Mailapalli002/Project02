import { View, Text, Linking, Touchable, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ActionCard = () => {
  const openLink = (link: string) => {
    Linking.openURL(link);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>CTA Button</Text>
      <View style={styles.card} >
        <Text style={styles.sideHeadingText}>what's new in React 19!</Text>
          <Image style={styles.image} source={{
            uri: "https://i.morioh.com/2024/02/19/0b66f9d8.webp",
            height: 250,
          }} />
        <Text style={styles.desText} numberOfLines={3}>React v19 is now available on npm!

          In our React 19 Upgrade Guide, we shared step-by-step instructions for upgrading your app to React 19. In this post, we’ll give an overview of the new features in React 19, and how you can adopt them.</Text>
          <View style={styles.footercontainer}>
          <TouchableOpacity style={styles.btn} onPress={() => openLink("https://react.dev/blog/2024/12/05/react-19")}>
          <Text style={styles.btnText}>Know More</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor:"#f29e9e",
    borderRadius: 10,
    marginVertical:20,
    paddingVertical:10,
    elevation: 3
  },
  sideHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textAlign: "center",
  },
  desText: {
    marginHorizontal: 15,
  },
  image:{
    marginVertical: 10
  },
  footercontainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn:{
    backgroundColor:"#827af6",
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
    
  },
  btnText: {
    color: "#ffffff"
  }
})
export default ActionCard