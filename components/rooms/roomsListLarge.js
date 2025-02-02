import React from 'react';
import { Text, Icon } from '@ui-kitten/components';
import { View, StyleSheet, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';

const RoomsListLarge = (props) => {
    const [favcolor, setFavcolor] = React.useState('#AAA');

    const addFavourite = () => {
        setFavcolor(favcolor == '#AAA' ? '#FF4626' : '#AAA');
    }

    return (
        <View style={styles.hotelCard}>
            <Ripple rippleSize={300} rippleDuration={600} onPress={props.navigate}>
                <Image
                    style={styles.hotelImg}
                    source={{ uri: props.image }}
                />
            </Ripple>
            <View style={styles.topBlock}>
                <View style={styles.rating}>
                    <Icon name='star' style={styles.starIcon} fill='#FFD13A' />
                    <Text style={styles.ratingCount}>{props.rating}</Text>
                </View>
                <View style={styles.favourite}>
                    <Ripple rippleSize={50} rippleDuration={600} onPress={addFavourite}>
                        <Icon name='heart' style={styles.heartIcon} fill={favcolor} />
                    </Ripple>
                </View>
            </View>
            <Ripple style={styles.namePrice} onPress={props.navigate}>
                <Text style={styles.title}>{props.hotelName}</Text>
                <View style={styles.priceBlock}>
                    <Text style={styles.oldPrice}>₹{props.cost - 200} </Text>
                    <Text style={styles.price}>₹{props.cost}</Text>
                    <Text style={styles.priceCaption}>  Per Night</Text>
                </View>
            </Ripple>
        </View>
    );
}

export default RoomsListLarge;

const styles = StyleSheet.create({
    hotelCard: {
        position: 'relative',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        height: 280,
    },
    hotelImg: {
        width: 350,
        height: 220,
        backgroundColor: '#FFF',
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 10,
    },
    placeholderContainer:{
        flex: 1, 
        width: 350,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        position: 'relative',
        height: 280,
    },
    hotelImgPlaceholder: {
        width: 350,
        height: 220,
        borderRadius: 10,
    },
    textPlaceholder:{
        position: 'absolute',
        bottom: 38,
        width: 200,
        height: 50,
        alignItems: 'center',
        padding: 1,
        borderRadius: 50,
        borderColor: '#DDD',
    },
    namePrice: {
        position: 'absolute',
        bottom: 38,
        width: '70%',
        height: 50,
        alignItems: 'center',
        padding: 1,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#DDD',
    },
    title: {
        fontSize: 15,
        marginBottom: 0,
        color: '#626262',
        fontWeight: '700',
    },
    priceBlock: {
        flexDirection: 'row',
    },
    price: {
        marginTop: 4,
        fontSize: 20,
        fontWeight: '700',
        color: '#3366FF',
    },
    priceCaption: {
        fontSize: 14,
        marginTop: 2,
        color: '#AAA'
    },
    topBlock: {
        width: '100%',
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        width: 40,
        height: 55,
        alignItems: 'center',
        marginLeft: '6%',
        borderColor: '#DDD',
        borderTopColor: '#FFF',
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#FFF'
    },
    starIcon: {
        marginTop: 2,
        width: 25,
        height: 25
    },
    heartIcon: {
        width: 25,
        height: 25
    },
    ratingCount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#626262'
    },
    favourite: {
        width: 40,
        height: 40,
        marginRight: '4%',
        marginTop: 12,
        borderRadius: 50,
        borderColor: '#DDD',
        borderWidth: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    favouritePlaceholder: {
        position: 'absolute',
        right: 15,
        width: 40,
        height: 40,
        marginTop: 12,
        borderRadius: 50,
    },
    oldPrice: {
        fontSize: 16,
        paddingTop: 2,
        paddingRight: 5,
        color: '#AAA',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
})