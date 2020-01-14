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
import SnackBar from 'react-native-snackbar-component';

const HotelsDetail = (props) => {
    var errors = props.hotelDetail.prices_services;
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [loadPrices, setLoadPrices] = React.useState(null);
    const [snack, setSnack] = React.useState(false);
    
    useEffect(() => {
        async function loadDatas(){
            const response = await LoadHotelDetailsData(props.navigation.state.params.alias);
            setData(response.data[0]);
            setLoading(false);
            setLoadPrices(true);
        }
        if(loading === true){
            loadDatas();
        }
    }, [])

    if(loadPrices === true){
        setLoadPrices(false);
        props.LoadPrices({hotelId : data.nameBlock.id, roomId : data.roomsBlock[0].id, dates: props.hotelDetail.dates, rooms: props.hotelDetail.rooms });
    }

    if(props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null){
        var prices = props.hotelDetail.prices_services;
    }

    const RenderPriceBlock = () => {
        errors !== undefined && errors !== null && errors.error !== '' ? setSnack(true) : false;
        return (
            props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null && props.hotelDetail.prices_services.data.data !== undefined ? <PricingDetails data={prices.data} /> : <PriceDetailsBlockSK/> 
        );
    }

    const RenderTotal = () => (
        props.hotelDetail.prices_services !== undefined && props.hotelDetail.prices_services !== null && prices.data.data !== undefined ? <BookHotel data={prices.data.data} /> : <TotalPriceSK/>
    );
    
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TopNavSimple screenTitle={loading === false ? data.nameBlock.title : ''} />
                {loading === true ? <ThumbImageSK pending={true} /> : <ThumbImg images={data.imageBlock}/> }
                <View style={styles.bodyContainer}>
                    {loading === true ? <NameBlockSK pending={true} /> : <NameBlock data={data.nameBlock} /> }
                    {loading === true ? <DescriptionBlockSK/> : <HotelDescription description={data.descriptionBlock.desc} /> }
                    {loading === true ? <AmenitiesBlockSK/> : <Amenities data={data.amenitiesBlock} /> }
                    {loading === true ? <RoomsBlockSK/> : <RoomsCategory data={data.roomsBlock} /> }
                    <ChooseDates/>
                    <GuestDetails/>
                    {loading === true ? <ReviewRatingBlockSK/> : <ReviewsRatings data={data.reviewsRatingsBlock} /> }
                    <RulesPolicies/>
                    <RenderPriceBlock/>
                    <RenderTotal/>
                </View>
                <View style={{ marginBottom: 10 }} />
            </ScrollView>
            <View style={styles.snackbar}>
                {errors !== undefined && errors !== null && errors.error !== undefined ? <SnackBar visible={snack} textMessage={errors.error} actionText="Ok" actionHandler={() => setSnack(false) }/> : null }
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({LoadPrices:LoadPrices}, dispatch);
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
    snackbar:{
        position: 'absolute',
        bottom: 0,
        height: 45,
        overflow: 'hidden',
        // backgroundColor: 'red',
        zIndex: 999,
        width: '100%',
    }
});