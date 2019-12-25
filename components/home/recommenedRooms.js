import React from 'react';
import { Text } from '@ui-kitten/components';
import { View, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import RoomsListLarge from '../rooms/roomsListLarge';
import styles from './styles';
import data from './recommendedRoomsData';
import { withNavigation } from 'react-navigation';

const RecommendedRooms = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('HotelsLargeList');
    }

    return(
        <View>
            <View style={styles.headingBlock}>
                <Text style={styles.headingText}>Recommended Rooms</Text>
                <Ripple rippleDuration={600} onPress={navigateDetails}>
                    <Text style={styles.caption}>View More</Text>
                </Ripple>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item) => <RoomsListLarge key={item.id} image={item.image} rating={item.rating} hotelName={item.hotelName} cost={item.cost} oldCost={item.oldCost} /> )}
            </ScrollView>
        </View>
    );
}


export default withNavigation(RecommendedRooms);