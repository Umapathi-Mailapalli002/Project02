import { View, Text, Linking, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openLink = (link:string) => {
        Linking.openURL(link);
    }
  return (
    <View>
      <Text style={styles.headingText}>CTA Button</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ctaButton} onPress={() => openLink("https://reactnative.dev/docs/linking")}>
<Text style={styles.btnText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
        paddingHorizontal:8,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    ctaButton: {
        backgroundColor: '#5da3fa',
        padding:12,
        borderRadius:8,
    },
    btnText: {
        color: "white",
        fontWeight: 500,
    }
})
export default ActionCard