import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText} >Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: 'https://handluggageonly.co.uk/wp-content/uploads/2014/09/Annecy_du_Col_Forclaz-s.jpg'
                }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Beautiful Place</Text>
                    <Text style={styles.cardLabel}>Sceniory</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Repudiandae culpa id asperiores minima, aliquid magni ratione eligendi numquam
                         assumenda cum vero, maiores voluptatem corrupti aut laborum corporis, mollitia modi. 
                         Labore quidem ipsam temporibus nam. Amet?</Text>
                         <Text style={styles.cardFooter}>1 hour ago</Text>
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
    cardImage: {
        height: 200,
        marginBottom: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    card: {
        padding: 10,
        width: 350,
        marginVertical: 12,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    cardElevated: {
        backgroundColor: "#ff99",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 5
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 14,
        marginTop: 6,
        marginBottom: 12,
       flexShrink:1,
    },
    cardFooter: {
        textAlign: 'right'
    }
})
export default FancyCard