import React from 'react';
import { Text, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import RoomsListSmall from '../rooms/roomsListSmall';
import styles from './styles';
import data from './recommendedRoomsData';
import { withNavigation } from 'react-navigation';

const ExclusiveRooms = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('HotelsExploreRooms');
    }

    const navigateHotelDetails = () => {
        navigation.navigate('HotelsDetail');
    }

    return(
        <View>
            <View style={styles.headingBlock}>
                <Text style={styles.headingText}>Exclusive Rooms</Text>
                <Ripple rippleDuration={600} onPress={navigateDetails}>
                    <Text style={styles.caption}>View More</Text>
                </Ripple>
            </View>
            {data.map((item) => <RoomsListSmall key={item.id} navigate={navigateHotelDetails} image={item.image} rating={item.rating} hotelName={item.hotelName} address={item.address} cost={item.cost}  oldCost={item.oldCost} /> )}
            <Ripple rippleDuration={600} onPress={navigateDetails}>
                <Button style={styles.button} appearance='ghost' status='basic'>View More</Button>
            </Ripple>
        </View>
    );
}


export default withNavigation(ExclusiveRooms);