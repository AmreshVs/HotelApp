import React from 'react';
import SkeletonContent from "react-native-skeleton-content";
import { StyleSheet } from 'react-native';

const ExclusiveRoomsSK = (props) => {
    return(
        <SkeletonContent
            containerStyle={styles.placeholderContainer}
            isLoading={props.pending}
            animationType="pulse"
            layout={[
                styles.hotelImgPlaceholder,
                styles.textPlaceholder,
                styles.textPlaceholder1,
                styles.textPlaceholder2,
                styles.favouritePlaceholder,
            ]}
        >
        </SkeletonContent>
    )
}

export default ExclusiveRoomsSK;

const styles = StyleSheet.create({
    placeholderContainer:{
        width: 370,
        height: 150,
        marginLeft: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDD',
        backgroundColor: '#FFF',
        flexDirection: 'row',
    },
    hotelImgPlaceholder: {
        width: 160,
        height: 150,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    textPlaceholder:{
        marginTop: 10,
        marginLeft: 10,
        width: 110,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder1:{
        position: 'absolute',
        marginTop: 35,
        right: 48,
        width: 150,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    textPlaceholder2:{
        position: 'absolute',
        marginTop: 60,
        right: 48,
        width: 150,
        height: 15,
        padding: 1,
        borderRadius: 10,
    },
    favouritePlaceholder: {
        position: 'absolute',
        right: 98,
        width: 100,
        height: 20,
        bottom: 15,
        borderRadius: 10,
    },
})