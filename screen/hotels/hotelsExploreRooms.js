import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SafeAreaView, ScrollView, View } from 'react-native';
import RoomsListSmall from '../../components/rooms/roomsListSmall';
import TopNavSimple from '../../components/navigation/topNavSimple';
import ExclusiveRoomsSK from '../../components/skeletons/exclusiveRoomsSK';
import LoadExclusiveRoomsData from '../../redux/thunkActions/loadExclusiveRoomsData';

const HotelsLargeListScreen = (props) => {

  useEffect(() => {
    props.LoadExclusiveRoomsData();
  }, []);

  var data = [];
  var loaded = null;
  if(props.exclusiveRooms.data !== undefined && Object.keys(props.exclusiveRooms.data).length > 0){
      data = props.exclusiveRooms.data;
      loaded = true;
  }
  else{
      data = [1, 2, 3, 4, 5];
      loaded = false;
  }

  return (
    <SafeAreaView>
      <TopNavSimple screenTitle="Explore Rooms" />
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 20}}>
        {data.map((item) => loaded === false ? <ExclusiveRoomsSK key={item + 1} pending={true} /> : <RoomsListSmall key={item.alias} navigate={() => props.navigation.goBack()} image={item.image[0].file} rating={item.avg_rating} hotelName={item.title} address={item.alias} cost={item.price_start}  oldCost={item.price_start - 200} /> )}
        <View style={{marginBottom: 80}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({LoadExclusiveRoomsData: LoadExclusiveRoomsData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsLargeListScreen);