import React from 'react';
import SkeletonContent from "react-native-skeleton-content";
import { StyleSheet } from 'react-native';

const ThumbImageSK = () => {
    return(
        <SkeletonContent
            containerStyle={styles.placeholderContainer}
            isLoading={true}
            layout={[
                styles.hotelImgPlaceholder,
            ]}
        >
        </SkeletonContent>
    )
}

export default ThumbImageSK;

const styles = StyleSheet.create({
    placeholderContainer:{
        flex: 1, 
        width: 350,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        height: 300,
    },
    hotelImgPlaceholder: {
        width: 450,
        height: 300,
        borderRadius: 10,
    },
})