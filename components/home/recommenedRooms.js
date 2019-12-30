import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from '@ui-kitten/components';
import { View, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import RoomsListLarge from '../rooms/roomsListLarge';
import styles from './styles';
// import data from './recommendedRoomsData';
import { withNavigation } from 'react-navigation';
import LoadHomeData from '../../redux/thunkActions/loadHomeData';

const RecommendedRooms = (props) => {
    console.log(props.homeData);

    useEffect(() => {
        props.LoadHomeData();
    }, [])

    const navigateDetails = () => {
        props.navigation.navigate('HotelsLargeList');
    }

    const navigateHotelDetails = () => {
        props.navigation.navigate('HotelsDetail');
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
                {props.homeData.homeData.map((item) => <RoomsListLarge key={item.alias} navigate={navigateHotelDetails} image={item.image[0].file} rating={item.rating} hotelName={item.title} cost={item.price_start} oldCost={item.price_start + 100} /> )}
            </ScrollView>
        </View>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({LoadHomeData: LoadHomeData}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(RecommendedRooms));