import React from 'react';
import SkeletonContent from "react-native-skeleton-content";
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const DescriptionBlockSK = (props) => {
    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Description</Text>
            <SkeletonContent
                containerStyle={styles.placeholderContainer}
                isLoading={props.pending}
                layout={[
                    styles.textPlaceholder1,
                    styles.textPlaceholder2,
                    styles.textPlaceholder3,
                    styles.textPlaceholder,
                ]}
            >
            </SkeletonContent>
        </Card>
    )
}

export default DescriptionBlockSK;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        height: 150,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heading:{
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
    placeholderContainer:{
        justifyContent: 'center',
    },
    textPlaceholder:{
        marginTop: 10,
        width: 70,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder1:{
        marginTop: 5,
        width: 300,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder2:{
        marginTop: 7,
        width: 320,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder3:{
        marginTop: 7,
        width: 280,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
})