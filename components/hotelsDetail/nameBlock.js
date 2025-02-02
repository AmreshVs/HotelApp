import React from 'react';
import { connect } from 'react-redux';
import { Card, Text, Icon } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import ReviewRating from '../extra/reviewRating';

const NameBlock = (props) => {
    var data = props.data;
    return(
        <Card style={styles.cardContainer}>
            <View style={styles.nameprice}>
                <View style={styles.nameBlock}>
                    <Text style={styles.roomTitle}>{data.title}</Text>
                    <Text style={styles.caption}>{data.subtitle}</Text>
                    <View style={styles.ratingContainer}>
                        <ReviewRating rating={data.avg_rating} />
                        <Text style={styles.ratingCount}><Text style={styles.caption}>{data.avg_rating}</Text><Text style={styles.caption}> | {data.total_comments} Comments</Text></Text>
                    </View>
                </View>
                <View style={styles.priceBlock}>
                    <Text style={styles.oldPrice}>{'₹'+data.discount_price} </Text>
                    <Text style={styles.price}>{'₹'+data.avg_price}</Text>
                    <Text style={styles.priceCaption}>  Per Night</Text>
                    <Icon name='map-outline' style={styles.mapIcon} fill='#CCC' />
                </View>
            </View>
        </Card>
    );
}

// const mapStateToProps = (state) => {
//     return state;
// }

export default NameBlock;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    nameprice:{
        flex: 1,
        flexDirection: 'row',
    },
    nameBlock:{
        width: '75%',
        height: 85,
        justifyContent: 'center'
    },
    priceBlock:{
        width: '25%',
        height: 85,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    price: {
        marginTop: 5,
        fontSize: 21,
        fontWeight: '700',
        color: '#3366FF',
    },
    oldPrice:{
        fontSize: 15,
        paddingTop: 1,
        paddingRight: 5,
        color: '#AAA',
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    priceCaption: {
        color: '#BBB',
        fontSize: 13
    },
    roomTitle:{
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
    caption: {
        color: '#BBB',
        marginBottom: 3
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    ratingCount:{
        fontSize: 16,
        color: '#626262',
        paddingTop: 7,
        paddingLeft: 5
    },
    mapIcon:{
        width: 27,
        height: 27,
        marginRight: '15%'
    }
});