import React from 'react';
import { Text, Card } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

const HotelDescription = () => {
    const [showDesc, setShowDesc] = React.useState(60);

    const revealDescription = () => {
        showDesc == 60 ? setShowDesc('auto') : setShowDesc(60);
    }

    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Description</Text>
            <Text style={{height: showDesc}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
            <Ripple rippleSize={50} rippleDuration={600} onPress={revealDescription}>
                <Text status='primary' style={{marginTop: 5}}>{showDesc == 60 ? 'More' : 'Less'}</Text>
            </Ripple>
        </Card>
    );
}

export default HotelDescription;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    heading:{
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
})