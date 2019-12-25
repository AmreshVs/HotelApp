import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Card, Icon, Layout } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { withNavigation } from 'react-navigation';
import { addGuests } from '../../redux/actions/hotelDetailActions';

const ReviewsLess = (props) => {
    return (
        <View style={styles.reviewsContainer}>
            <View style={styles.ratingName}>
                <View style={styles.starContainer}>
                    <Icon name='star' style={styles.star} fill='#FFC145' />
                    <Text style={styles.rating}>3.8</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Amresh Vs</Text>
                    <Text style={styles.postedon}>Posted on 21/12/19</Text>
                </View>
            </View>
            <View style={styles.reviewContent}>
                <Text style={styles.review}>This is the best hotel to choose from Kerala</Text>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return state.initialState.AppData[0];
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addGuests: addGuests }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ReviewsLess));

const styles = StyleSheet.create({
    reviewsContainer:{
        marginTop: 20,
    },
    star:{
        width: 20,
        height: 20,
    },
    starContainer:{
        width: 35,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRightWidth: 1,
        borderRightColor: '#DDD',
    },
    rating:{
        fontSize: 13,
        color: '#AAA'
    },
    ratingName:{
        flexDirection: 'row'
    },
    nameContainer:{
        marginLeft: 20
    },
    name:{
        color: '#3c3c3c',
        fontWeight: '700'
    },
    postedon:{
        fontSize: 13,
        color: '#AAA'
    },
    reviewContent:{
        marginTop: 5,
    },
    review:{
        fontSize: 14,
    },
})