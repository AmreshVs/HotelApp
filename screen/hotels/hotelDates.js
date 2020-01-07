import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MomentDateService } from '@ui-kitten/moment';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Layout, Tab, TabView, Button } from '@ui-kitten/components';
import SelectGuest from '../../components/hotelsDetail/selectGuest';
import { RangeCalendar } from '@ui-kitten/components';
import { withNavigation } from 'react-navigation';
import { removeGuests, addGuests, chooseDates } from '../../redux/actions/hotelDetailActions';
import moment from 'moment';

const HotelDates = (props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const ClosePage = () => {
        props.navigation.goBack();
    }

    const roomsLength = Object.keys(props.rooms).length;
    const rooms = [];
    for(var i=1;i<=roomsLength;i++){
        rooms.push(i);
    }
    
    const [roomsArray, setRoomsArray] = React.useState(rooms);
    var lastNum = roomsArray.slice(-1);

    const addRoom = () => {
        setRoomsArray(roomsArray.concat(JSON.parse(lastNum[0] + 1)));
        props.addGuests({room: lastNum[0] + 1, guests: {adult: 1, children: 0}});
    }

    const removeRoom = () => {
        setRoomsArray(roomsArray.slice(0, -1));
        var guestsArr = props.rooms;
        delete guestsArr[roomsArray.length];
        props.removeGuests(guestsArr);
    }

    const setDateRange = (obj) => {
        props.chooseDates({dates:{startDate: obj.startDate, endDate: obj.endDate}, rooms:props.rooms });
    }

    const dateService = new MomentDateService();

    return (
        <SafeAreaView >
            <TabView
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
                style={{ height: '90%' }}
            >
                <Tab title='Check In / Out' style={styles.title}>
                    <Layout style={styles.tabContainer}>
                        <RangeCalendar
                            dateService={dateService}
                            range={props.dates !== undefined ? {startDate: moment(props.dates.startDate), endDate: moment(props.dates.endDate)} : {startDate: null, endDate: null}}
                            onSelect={setDateRange}
                        />
                    </Layout>
                </Tab>
                <Tab title='Guests' style={styles.title}>
                    <ScrollView style={[styles.tabContainer, styles.guests]}  showsVerticalScrollIndicator={false}>
                        {roomsArray.map((item) => {
                            if(props.rooms[item] !== undefined){
                                return <SelectGuest key={item} roomNum={item} adult={props.rooms[item].adult} children={props.rooms[item].children} removeRoom={removeRoom} /> 
                            }
                        })}
                        <Button style={styles.addRoom} appearance='outline' status='primary' onPress={addRoom}>Add Room</Button>
                    </ScrollView>
                </Tab>
            </TabView>
            <Button style={styles.button} onPress={ClosePage} status='primary'>Confirm</Button>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return state.hotelDetail;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeGuests: removeGuests, addGuests: addGuests, chooseDates: chooseDates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HotelDates));

const styles = StyleSheet.create({
    tabContainer: {
        minHeight: 64,
    },
    title: {
        padding: 10
    },
    guests: {
        margin: 20,
    },
    button: {
        margin: 10
    },
});