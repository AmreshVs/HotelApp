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

const HomeScreen = (props) => {

  useEffect(() => {
    props.LoadHomeData();
  }, [])

  return (
    <ScrollView style={styles.statusBarTop} showsVerticalScrollIndicator={false}>
      <Head/>
      <SearchHotelCard/>
      <RecommendedRooms/>
      <ExclusiveRooms/>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({LoadHomeData: LoadHomeData}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
