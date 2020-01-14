import React from 'react';
import SkeletonContent from "react-native-skeleton-content";
import { Card, Button } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const TotalPriceSK = () => {

    return(
        <Card style={styles.cardContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                <SkeletonContent
                    containerStyle={styles.placeholderContainer}
                    isLoading={true}
                    animationType="pulse"
                    layout={[
                        styles.textPlaceholder,
                    ]}
                >
                </SkeletonContent>
                </View>
                <View style={styles.btnContainer}>
                    <Button disabled={true}>Book Now</Button>
                </View>
            </View>
        </Card>
    );
}

export default TotalPriceSK;

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
    },
    placeholderContainer:{
        justifyContent: 'center',
    },
    textPlaceholder:{
        width: 70,
        height: 40,
        padding: 1,
        borderRadius: 10,
    },
})