import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import TopNavSimple from '../../components/navigation/topNavSimple';
import ThumbImg from '../../components/hotelsDetail/thumbImg';
import NameBlock from '../../components/hotelsDetail/nameBlock';
import HotelDescription from '../../components/hotelsDetail/hotelDescription';
import RoomsCategory from '../../components/hotelsDetail/roomsCategory';
import Amenities from '../../components/hotelsDetail/amenities';
import ChooseDates from '../../components/hotelsDetail/chooseDates';
import GuestDetails from '../../components/hotelsDetail/guestDetails';
import ReviewsRatings from '../../components/hotelsDetail/reviewsRatings';
import RulesPolicies from '../../components/hotelsDetail/rulesPolicies';
import PricingDetails from '../../components/hotelsDetail/pricingDetails';
import BookHotel from '../../components/hotelsDetail/bookHotel';

const HotelsDetail = (props) => {
    
    var data = props.initialState.AppData;
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopNavSimple screenTitle={data[0].hotelName} />
                <ThumbImg/>
                <View style={styles.bodyContainer}>
                    <NameBlock/>
                    <HotelDescription/>
                    <Amenities/>
                    <RoomsCategory/>
                    <ChooseDates/>
                    <GuestDetails/>
                    <ReviewsRatings/>
                    <RulesPolicies/>
                    <PricingDetails/>
                    <BookHotel/>
                </View>
                <View style={{ marginBottom: 10 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(HotelsDetail);

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#FAFAFA', 
        height: '100%',
    },
    bodyContainer:{
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
    },
});