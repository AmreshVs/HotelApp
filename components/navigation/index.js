import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screen/home/index';
import DetailsScreen from '../../screen/home/details';
import TestScreen from '../../screen/home/test';
import BottomNav from '../navigation/bottomNavigation';
import HotelsLargeListScreen from '../../screen/hotels/hotelsLargeList';
import HotelsExploreRooms from '../../screen/hotels/hotelsExploreRooms';
import HotelsDetail from '../../screen/hotels/hotelsDetail';
import HotelDates from '../../screen/hotels/hotelDates';

const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Settings: TestScreen,
  },
  {
    tabBarComponent: BottomNav,
  }
);

const rootStack = createStackNavigator(
  {
    HotelsDetail: HotelsDetail,
    Main: TabNavigation,
    HotelsLargeList: HotelsLargeListScreen,
    HotelsExploreRooms: HotelsExploreRooms,
    HotelDates: HotelDates
  },
  {
    headerMode: 'none',
  }
)

export const TabNavigator = createAppContainer(rootStack);