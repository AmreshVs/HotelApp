import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../screen/home/index';
import FavouritesScreen from '../../screen/favourites/index';
import BookingsScreen from '../../screen/bookings/index';
import UserProfileScreen from '../../screen/userProfile/index';
import BottomNav from '../navigation/bottomNavigation';
import HotelsLargeListScreen from '../../screen/hotels/hotelsLargeList';
import HotelsExploreRooms from '../../screen/hotels/hotelsExploreRooms';
import HotelsDetail from '../../screen/hotels/hotelsDetail';
import HotelDates from '../../screen/hotels/hotelDates';
import PaymentScreen from '../../screen/payment';
import BookingConfirmed from '../../screen/hotels/bookingConfirmed';

const TabNavigation = createBottomTabNavigator(
  {
    Home: HomeScreen,
    FavouritesScreen: FavouritesScreen,
    BookingsScreen: BookingsScreen,
    UserProfileScreen: UserProfileScreen,
  },
  {
    tabBarComponent: BottomNav,
  }
);

const rootStack = createStackNavigator(
  {
    Main: TabNavigation,
    HotelsLargeList: HotelsLargeListScreen,
    HotelsExploreRooms: HotelsExploreRooms,
    HotelDates: HotelDates,
    HotelsDetail: HotelsDetail,
    PaymentScreen: PaymentScreen,
    BookingConfirmed: BookingConfirmed,
  },
  {
    headerMode: 'none',
  }
);

export const TabNavigator = createAppContainer(rootStack);