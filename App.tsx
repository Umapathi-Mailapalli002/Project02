import { View, Text, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <ScrollView>
        <View>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        </View>
        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  textWhite: {
    color: '#ffffff'
  },
  textBlack: {
    color: '#000000',
  },
})
export default App;