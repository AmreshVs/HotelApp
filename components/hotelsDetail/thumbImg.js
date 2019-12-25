import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
import Slideshow from 'react-native-image-slider-show';

const ThumbImg = (props) => {

    const [favcolor, setFavcolor] = React.useState('#AAA');

    const addFavourite = () => {
        setFavcolor(favcolor == '#AAA' ? '#FF4626' : '#AAA');
    }

    return (
        <View style={styles.imageContainer}>
            <Ripple rippleSize={50} rippleDuration={600} onPress={addFavourite} style={styles.heartContainer}>
                <Icon name='heart' style={styles.heartIcon} fill={favcolor} />
            </Ripple>
            <Slideshow 
                containerStyle={styles.image}
                height={300}
                dataSource={[
                    { url:'https://images.oyoroomscdn.com/uploads/hotel_image/42030/large/3273f03a218a04da.jpg' },
                    { url:'https://media-cdn.tripadvisor.com/media/photo-s/0e/72/68/70/suite-lounge.jpg' },
                    { url:'https://freshome.com/wp-content/uploads/2013/07/Dubai-Underwater-Hotel-Rooms.jpg' }
                ]}
            />
        </View>
    );
};

export default ThumbImg;

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 30,
    },
    heartContainer: {
        position: 'absolute', 
        right: 10, 
        top: 10, 
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 4,
        zIndex: 1,
    },
    heartIcon: {
        width: 22,
        height: 22
    }
})