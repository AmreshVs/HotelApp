import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import styles from './styles';
import SearchHotelCard from '../../components/home/searchHotelCard';
import Head from '../../components/home/head';
import RecommendedRooms from '../../components/home/recommenedRooms';
import ExclusiveRooms from '../../components/home/exclusiveRooms';
import LoadHomeData from '../../redux/thunkActions/loadHomeData';

const HomeScreen = () => {

  const [data, setData] = React.useState({});

  useEffect(() => {
    async function loadDatas(){
        const response = await LoadHomeData();
        setData(response);
    }
    loadDatas();
  }, [])

  return (
    <ScrollView style={styles.statusBarTop} showsVerticalScrollIndicator={false}>
      <Head/>
      <SearchHotelCard/>
      <RecommendedRooms data={data.recommended} />
      <ExclusiveRooms data={data.exclusive} />
    </ScrollView>
  );
};

export default HomeScreen;
