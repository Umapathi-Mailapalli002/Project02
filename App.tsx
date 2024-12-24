import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
      <ScrollView>
        <FlatCards />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
  }
})
export default App;