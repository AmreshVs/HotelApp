import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import SearchHotelCard from '../../components/home/searchHotelCard';
import Head from '../../components/home/head';
import RecommendedRooms from '../../components/home/recommenedRooms';
import ExclusiveRooms from '../../components/home/exclusiveRooms';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.statusBarTop} showsVerticalScrollIndicator={false}>
      <Head/>
      <SearchHotelCard/>
      <RecommendedRooms/>
      <ExclusiveRooms/>
    </ScrollView>
  );
};

export default HomeScreen;
