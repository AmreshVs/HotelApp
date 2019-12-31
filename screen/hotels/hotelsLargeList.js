import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SafeAreaView, ScrollView, View } from 'react-native';
import RoomsListAllLarge from '../../components/rooms/roomsListAllLarge';
import TopNavSimple from '../../components/navigation/topNavSimple';
import { withNavigation } from 'react-navigation';
import LoadRecommendedRoomsData from '../../redux/thunkActions/loadRecommendedRoomsData';
import RecommendedRoomsSK from '../../components/skeletons/recommendedRoomsSK';

const HotelsLargeListScreen = (props) => {

  useEffect(() => {
    props.LoadRecommendedRoomsData();
  }, [])

  const navigateHotelDetails = () => {
    props.navigation.navigate('HotelsDetail');
  }

  var data = [];
  var loaded = null;
  if(Object.keys(props.recommendedRooms.data).length > 0){
      data = props.recommendedRooms.data;
      loaded = true;
  }
  else{
      data = [1, 2];
      loaded = false;
  }

  return (
    <SafeAreaView>
      <TopNavSimple screenTitle="Recommended Rooms" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => loaded === false ? <View style={{alignItems: 'center', paddingTop: 20,}}><RecommendedRoomsSK key={item + 1} pending={true} /></View> : <RoomsListAllLarge key={item.alias} navigate={navigateHotelDetails} image={item.image[0].file} rating={item.avg_rating} hotelName={item.title} cost={item.price_start} oldCost={item.price_start + 100} pending={false} /> )}
        <View style={{marginBottom: 80}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({LoadRecommendedRoomsData: LoadRecommendedRoomsData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HotelsLargeListScreen));