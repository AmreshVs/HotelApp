import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import data from '../../components/home/recommendedRoomsData';
import RoomsListAllLarge from '../../components/rooms/roomsListAllLarge';
import TopNavSimple from '../../components/navigation/topNavSimple';

const HotelsLargeListScreen = () => {
  return (
    <SafeAreaView>
      <TopNavSimple screenTitle="Recommended Rooms" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => <RoomsListAllLarge key={item.id} image={item.image} rating={item.rating} hotelName={item.hotelName} cost={item.cost}  oldCost={item.oldCost} /> )}
        <View style={{marginBottom: 80}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelsLargeListScreen;