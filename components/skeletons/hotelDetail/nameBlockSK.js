import React from 'react';
import SkeletonContent from "react-native-skeleton-content";
import { Card } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const NameBlockSK = () => {
    return(
        <Card style={styles.cardContainer}>
            <SkeletonContent
                containerStyle={styles.placeholderContainer}
                isLoading={true}
                animationType="pulse"
                layout={[
                    styles.textPlaceholder,
                    styles.textPlaceholder1,
                    styles.textPlaceholder2,
                    styles.favouritePlaceholder,
                ]}
            >
            </SkeletonContent>
        </Card>
    )
}

export default NameBlockSK;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    placeholderContainer:{
        justifyContent: 'center',
    },
    textPlaceholder:{
        width: 150,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder1:{
        marginTop: 10,
        width: 190,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder2:{
        marginTop: 10,
        width: 150,
        height: 20,
        padding: 1,
        borderRadius: 10,
    },
    favouritePlaceholder: {
        position: 'absolute',
        right: 0,
        width: 100,
        height: 20,
        borderRadius: 10,
    },
})