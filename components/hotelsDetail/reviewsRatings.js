import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Card, Icon, Layout } from '@ui-kitten/components';
import { StyleSheet, View, Modal, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { withNavigation } from 'react-navigation';
import { addGuests } from '../../redux/actions/hotelDetailActions';
import Progress from '../extra/progress';
import ReviewsLess from './reviewsLess';
import TopNavSimple from '../navigation/topNavSimple';
import WriteReview from './writeReview';

const progressData = [
    { id: 5, num: 40 },
    { id: 4, num: 62 },
    { id: 3, num: 25 },
    { id: 2, num: 33 },
    { id: 1, num: 42 },
];

const GuestDetails = (props) => {

    const [visible, setVisible] = React.useState(false);
    const [writeReview, setwriteReview] = React.useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    }

    const toggleWriteReview = () => {
        setwriteReview(!writeReview);
    }

    return (
        <View style={{ width: '100%', marginLeft: 20 }}>
            <Card style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.textContainer1}>
                        <Text style={styles.heading}>Reviews & Ratings</Text>
                        <Ripple onPress={toggleWriteReview}>
                            <Icon name='edit-outline' fill='#AAA' width={20} height={20} />
                        </Ripple>
                    </View>
                    <View style={styles.ratingsContainer}>
                        <View style={styles.ratingLeft}>
                            <Text style={styles.rating}>4.5</Text>
                            <Text style={styles.ratingCaption}>Very Good</Text>
                            <Text style={styles.ratingNumber}>2151 ratings</Text>
                        </View>
                        <View style={styles.ratingRight}>
                            {progressData.map((item) => {
                                return (
                                    <View key={item.id} style={styles.progressCount}>
                                        <View style={styles.countContainer}>
                                            <Text>{item.id}</Text>
                                        </View>
                                        <View style={styles.progressContainer}>
                                            <Progress color='#FFC145' data={item.num} />
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <ReviewsLess />
                <Ripple rippleSize={50} rippleDuration={600} style={styles.seeAllContainer} onPress={toggleModal}>
                    <Text style={styles.seeAll}>See all reviews</Text>
                </Ripple>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={visible}
                    onRequestClose={toggleModal}
                >
                    <View>
                        <TopNavSimple backHandler={toggleModal} screenTitle="All Reviews" />
                        <ScrollView style={styles.reviewsMore}>
                            {progressData.map((item) => {
                                return <ReviewsLess key={item.id} />
                            })}
                        </ScrollView>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={writeReview}
                    onRequestClose={toggleWriteReview}
                >
                    <View>
                        <TopNavSimple backHandler={toggleWriteReview} screenTitle="Write a review" />
                        <WriteReview backHandler={toggleWriteReview} />
                    </View>
                </Modal>
            </Card>
        </View>
    );
}

const mapStateToProps = (state) => {
    return state.initialState.AppData[0];
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addGuests: addGuests }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(GuestDetails));

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    heading: {
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
    ratingsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    ratingLeft: {
        height: 150,
        width: '35%',
        paddingRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderTopStartRadius: 10,
        borderRightColor: '#EEE',
    },
    ratingRight: {
        height: 150,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating: {
        fontSize: 40,
        fontWeight: '700',
        paddingTop: 20,
        color: '#3366FF'
    },
    ratingCaption: {
        // color: '#AAA'
    },
    ratingNumber: {
        color: '#BBB',
        fontSize: 13,
    },
    progressCount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 6,
    },
    countContainer: {
        width: '10%',
    },
    progressContainer: {
        width: '90%'
    },
    seeAllContainer: {
        marginTop: 10,
    },
    seeAll: {
        color: '#3366FF'
    },
    reviewsMore: {
        paddingLeft: 20
    },
    textContainer1:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})