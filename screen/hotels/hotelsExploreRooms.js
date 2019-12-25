import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, View } from 'react-native';
import RoomsListSmall from '../../components/rooms/roomsListSmall';
import TopNavSimple from '../../components/navigation/topNavSimple';

const HotelsLargeListScreen = (props) => {
  var data = props.initialState.AppData;
  return (
    <SafeAreaView>
      <TopNavSimple screenTitle="Explore Rooms" />
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 20}}>
        {data.map((item) => <RoomsListSmall key={item.id} image={item.image} rating={item.rating} hotelName={item.hotelName} address={item.address} cost={item.cost} oldCost={item.oldCost} /> )}
        <View style={{marginBottom: 80}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(HotelsLargeListScreen);