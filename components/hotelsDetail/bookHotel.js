import React from 'react';
import { Text, Card, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const BookHotel = (props) => {

    const navigatePayment = () => {
        props.navigation.navigate('PaymentScreen');
    }

    return(
        <Card style={styles.cardContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.total}>₹{props.data.price !== undefined ? props.data.price.discount_after_price : 0}</Text>
                    <Text style={styles.totalCaption}>Total</Text>
                </View>
                <View style={styles.btnContainer}>
                    {props.data.price !== undefined ? <Button onPress={navigatePayment}>Book Now</Button> : <Button disabled={true}>Book Now</Button> }
                </View>
            </View>
        </Card>
    );
}

export default withNavigation(BookHotel);

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