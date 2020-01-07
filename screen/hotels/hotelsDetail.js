import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import LoadHotelDetailsData from '../../redux/thunkActions/loadHotelDetails';
import LoadPrices from '../../redux/thunkActions/loadPrices';

// Skeletons
import ThumbImageSK from '../../components/skeletons/thumbImageSK';
import NameBlockSK from '../../components/skeletons/hotelDetail/nameBlockSK';
import DescriptionBlockSK from '../../components/skeletons/hotelDetail/descriptionBlockSK';
import AmenitiesBlockSK from '../../components/skeletons/hotelDetail/amenitiesBlockSK';
import RoomsBlockSK from '../../components/skeletons/hotelDetail/roomsBlockSK';
import ReviewRatingBlockSK from '../../components/skeletons/hotelDetail/reviewsRatingsSK';
import PriceDetailsBlockSK from '../../components/skeletons/hotelDetail/priceDetailsBlockSK';
import TotalPriceSK from '../../components/skeletons/hotelDetail/totalPriceSK';

const HotelsDetail = (props) => {

    useEffect(() => {
        async function loadDatas(){
            await props.LoadHotelDetailsData(props.navigation.state.params.alias);
        }
        loadDatas();
        if(props.hotelDetail.hotelDetail.data !== undefined){
            props.LoadPrices({hotelId : props.hotelDetail.hotelDetail.data[0].nameBlock.id, roomId : props.hotelDetail.hotelDetail.data[0].roomsBlock[0].id, dates: props.hotelDetail.dates, rooms: props.hotelDetail.rooms });
        }
    }, [])
    
    if(props.hotelDetail.hotelDetail.data !== undefined){
        var data = props.hotelDetail.hotelDetail.data[0];
    }

    if(props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null){
        var prices = props.hotelDetail.prices_services;
    }

    const RenderPriceBlock = () => (
        props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null && prices.data.data !== undefined ? <PricingDetails data={prices.data} /> : <PriceDetailsBlockSK/> 
    )

    const RenderTotal = () => (
        props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null && prices.data.data !== undefined && prices.data.data.price !== undefined ? <BookHotel data={prices.data.data.price.total} /> : <TotalPriceSK/>
    )
    
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopNavSimple screenTitle={data !== undefined ? data.nameBlock.title : ''} />
                {props.hotelDetail.pending === true ? <ThumbImageSK pending={true} /> : <ThumbImg images={data.imageBlock}/> }
                <View style={styles.bodyContainer}>
                    {props.hotelDetail.pending === true ? <NameBlockSK pending={true} /> : <NameBlock/> }
                    {props.hotelDetail.pending === true ? <DescriptionBlockSK/> : <HotelDescription description={data.descriptionBlock.desc} /> }
                    {props.hotelDetail.pending === true ? <AmenitiesBlockSK/> : <Amenities data={data.amenitiesBlock} /> }
                    {props.hotelDetail.pending === true ? <RoomsBlockSK/> : <RoomsCategory data={data.roomsBlock} /> }
                    <ChooseDates/>
                    <GuestDetails/>
                    {props.hotelDetail.pending === true ? <ReviewRatingBlockSK/> : <ReviewsRatings data={data.reviewsRatingsBlock} /> }
                    <RulesPolicies/>
                    <RenderPriceBlock/>
                    <RenderTotal/>
                </View>
                <View style={{ marginBottom: 10 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({LoadHotelDetailsData:LoadHotelDetailsData, LoadPrices:LoadPrices}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsDetail);

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