import React from 'react';
import { Text, Card, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const BookHotel = () => {
    return(
        <Card style={styles.cardContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.total}>₹1,680</Text>
                    <Text style={styles.totalCaption}>Total</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button>Book Now</Button>
                </View>
            </View>
        </Card>
    );
}

export default BookHotel;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    heading:{
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
    textContainer:{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    total:{
        fontSize: 20,
        fontWeight: '700'
    },
    totalCaption:{
        color: '#AAA'
    },
    btnContainer:{
        width: '70%',
    },
    container:{
        flexDirection: 'row'
    }
})