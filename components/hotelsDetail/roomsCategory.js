import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Text, Card, CheckBox, Icon, Modal, Layout } from '@ui-kitten/components';
import data from '../home/recommendedRoomsData';
import Ripple from 'react-native-material-ripple';
import { openImageViewer, closeImageViewer } from '../../redux/actions/hotelDetailActions';
import ImageViewer from '../../components/extra/ImageViewer';

const images = [
    {
        source: {
            uri: 'https://images.oyoroomscdn.com/uploads/hotel_image/42030/large/3273f03a218a04da.jpg',
        },
        title: 'Paris',
    },
    {
        source: {
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/72/68/70/suite-lounge.jpg',
        },
        title: 'Test2',
    },
    {
        source: {
            uri: 'https://freshome.com/wp-content/uploads/2013/07/Dubai-Underwater-Hotel-Rooms.jpg',
        },
        title: 'test3',
    },
];

const RoomsCategory = (props) => {

    var amenitiesData = props.initialState.amenitiesData;
    var amenitiesLessData = props.initialState.amenitiesLessData;

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const onCheckedChange = (index) => {
        setSelectedIndex(index);
    };

    const [visible, setVisible] = React.useState(false);

    const toggleModal = () => {
        setVisible(!visible);
    };

    const RenderModalElement = () => (
        <Layout style={styles.modalContainer}>
            <Text style={styles.heading}>More Amenities</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.amenitiesContainer}>
                        {amenitiesData.map( item => 
                            <View key={item.name} style={styles.amenities}>
                                <Image
                                    style={styles.amenitiesImg}
                                    source={{uri: item.url}}
                                />
                            </View>
                        )}
                    </View>
                </ScrollView>
        </Layout>
    );    

    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Rooms</Text>
                <View style={styles.controlContainer}>
                    <View style={styles.roomDetails}>
                        <View>
                            <Ripple onPress={props.openImageViewer}>
                                <Image
                                    style={styles.image}
                                    source={{uri: data[0].image}}
                                />
                            </Ripple>
                        </View>
                        <View>
                            <Text style={styles.roomTitle}>Single Bedroom</Text>
                            <View style={styles.capacity}>
                                <Icon name='people-outline' fill='#BBB' width={20} height={20} />
                                <Text style={styles.roomCaption}> x2</Text>
                            </View>
                            <View style={styles.roomAmenities}>
                                {amenitiesLessData.map(item => <Image key={item.name} source={{uri:item.url}} style={styles.roomAmenitiesImg} />)}
                                <Ripple style={styles.moreBorder} onPress={toggleModal}>
                                    <Text style={styles.moreCaption}>10+</Text>
                                </Ripple>
                                <Modal visible={visible} allowBackdrop={true} onBackdropPress={toggleModal}>
                                    <RenderModalElement/>
                                </Modal>
                            </View>
                            <CheckBox
                                style={styles.checkbox}
                                status='success'
                                text={data[0].cost}
                                textStyle={styles.checkText}
                                checked={selectedIndex == 1 ? true : false}
                                onChange={() => onCheckedChange(1)}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.controlContainer}>
                    <View style={styles.roomDetails}>
                        <View>
                            <Ripple onPress={props.openImageViewer}>
                                <Image
                                    style={styles.image}
                                    source={{uri: data[1].image}}
                                />
                            </Ripple>
                        </View>
                        <View>
                            <Text style={styles.roomTitle}>Deluxe Double Bedroom</Text>
                            <View style={styles.capacity}>
                                <Icon name='people-outline' fill='#BBB' width={20} height={20} />
                                <Text style={styles.roomCaption}> x4</Text>
                            </View>
                            <View style={styles.roomAmenities}>
                                {amenitiesLessData.map(item => <Image key={item.name} source={{uri:item.url}} style={styles.roomAmenitiesImg} />)}
                                <Ripple style={styles.moreBorder} onPress={toggleModal}>
                                    <Text style={styles.moreCaption}>10+</Text>
                                </Ripple>
                            </View>
                            <CheckBox
                                style={styles.checkbox}
                                status='success'
                                text={data[1].cost}
                                textStyle={styles.checkText}
                                checked={selectedIndex == 2 ? true : false}
                                onChange={() => onCheckedChange(2)}
                            />
                        </View>
                    </View>
                </View>
            <ImageViewer images={images} show={props.hotelDetail.showImageViewer} onClose={props.closeImageViewer} />
        </Card>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ openImageViewer: openImageViewer, closeImageViewer: closeImageViewer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsCategory);

const styles = StyleSheet.create({
    heading:{
        fontSize: 16,
        marginBottom: 3,
        color: '#626262',
        fontWeight: '700',
    },
    cardContainer:{
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    checkbox: {
        marginLeft: 10,
        marginTop: 8,
        zIndex: -5,
        justifyContent: 'flex-start',
        // backgroundColor: 'red'
    },
    controlContainer: {
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    image:{
        width: 150,
        height: 130,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    roomDetails:{
        flexDirection: 'row',
    },
    roomTitle:{
        padding: 8,
        paddingLeft: 10,
        width: '100%'
    },
    capacity:{
        flexDirection: 'row',
        paddingLeft: 10
    },
    roomCaption:{
        color: '#BBB',
        paddingTop: 0
    },
    roomAmenities:{
        width: 170,
        height: 25, 
        marginLeft: 10,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    roomAmenitiesImg:{
        width: 18, 
        height: 18, 
        marginRight: 15, 
        opacity: 0.5,
    },
    moreBorder:{
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 1
    },
    moreCaption:{
        fontSize: 13,
        color: '#AAA'
    },
    checkText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3366FF'
    },
    modalContainer:{
        width: 300,
        backgroundColor: '#FFF',
        padding: 15,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
    },
    moreAmenities:{
        flex: 1,
        flexDirection: 'row',
    },
    amenitiesContainer:{
        top: 15,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        justifyContent: 'center'
    },
    amenities:{
        height: 50,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    amenitiesImg:{
        width: 25,
        height: 25,
        marginRight: 10,
        opacity: 0.5
    },
});