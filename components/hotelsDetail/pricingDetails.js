import React from 'react';
import { Text, Card } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const PricingDetails = () => {
    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Pricing Details</Text>
            <View style={styles.textContainer}>
                <Text>VAT</Text>
                <Text>₹152.73</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>₹1,680</Text>
            </View>
        </Card>
    );
}

export default PricingDetails;

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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    total:{
        fontWeight: '700'
    }
})