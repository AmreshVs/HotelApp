import React from 'react';
import { Text, Card, CheckBox, Button } from '@ui-kitten/components';
import { StyleSheet, View, Modal, ScrollView } from 'react-native';
import TopNavSimple from '../navigation/topNavSimple';
import ExtraServices from './extraServices';

const couponsData = [
    {id: 1, name: 'FIRST', desc: 'Flat 50% OFF on your hotel booking'},
    {id: 2, name: 'SECOND', desc: 'Flat 35% OFF on your hotel booking'},
    {id: 3, name: '2020', desc: 'Flat 40% OFF on your hotel booking'},
    {id: 4, name: 'NEW', desc: 'Flat 60% OFF on your hotel booking'},
    {id: 5, name: 'NEWYEAR', desc: 'Flat 30% OFF on your hotel booking'},
    {id: 6, name: 'NEWYEAR', desc: 'Flat 30% OFF on your hotel booking'},
    {id: 7, name: 'NEWYEAR', desc: 'Flat 30% OFF on your hotel booking'},
    {id: 8, name: 'NEWYEAR', desc: 'Flat 30% OFF on your hotel booking'},
    {id: 9, name: 'NEWYEAR', desc: 'Flat 30% OFF on your hotel booking'},
];

const extraServicesData = [
    {id: 1, name: 'Towel', desc: '1 hand towel, 1 bath towel, 1 bath mat', quantity: true, price: '₹50'},
    {id: 2, name: 'Housework', desc: '', quantity: false, price: '₹50'},
    {id: 3, name: 'Heating', desc: '', quantity: false, price: '₹10'},
    {id: 4, name: 'Pet', desc: '', quantity: true, price: '₹35'},
];

const PricingDetails = () => {

    const [coupon, setCoupon] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [selectCoupon, setSelectCoupon] = React.useState('');

    const openModal = () => {
        if(coupon === false){
            setCoupon(true);
            setModal(!modal);
        }
        else{
            setCoupon(false);
            setModal(false);
            setSelectCoupon('');
        }
    }

    const closeModal = (item) => {
        setSelectCoupon(item);
        setModal(!modal);
    }

    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Pricing Details & Extra Services</Text>
            <View style={styles.textContainer}>
                {selectCoupon === '' ? <Text>Apply Coupon</Text> : <Text style={[styles.coupon, {marginTop: 10}]}>Coupon : {selectCoupon}</Text>}
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>{selectCoupon === '' ? '' : '₹152.73'}</Text>
                    <CheckBox
                        checked={coupon}
                        onChange={openModal}
                    />
                </View>
            </View>
            {extraServicesData.map((item) => {
                return <ExtraServices key={item.id} name={item.name} desc={item.desc} quantity={item.quantity} price={item.price} />
            })}
            <View style={styles.textContainer}>
                <Text>VAT</Text>
                <Text>₹152.73</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>₹1,680</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => setModal(!modal)}
            >
                <View>
                    <TopNavSimple backHandler={() => setModal(!modal)} screenTitle="Apply Coupon" />
                    <ScrollView style={styles.applyCoupon} showsVerticalScrollIndicator={false}>
                        <Text style={[styles.heading, styles.couponHeading]}>Availabe Coupons</Text> 
                        <View style={styles.couponsContainer}>
                            {couponsData.map((item) => {
                                return(
                                    <View style={styles.container} key={item.id}>
                                        <View style={styles.coupons}>
                                            <View style={styles.textContent}>
                                                <Text style={styles.coupon}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View style={styles.btnContent}>
                                                <Button style={styles.button} appearance='outline' size='tiny' onPress={() => closeModal(item.name)}>Apply</Button>
                                            </View>
                                        </View>
                                        <Text style={styles.couponDesc}>{item.desc}</Text>
                                    </View>
                                )     
                            })}
                        </View>
                        <View style={{marginBottom: 70}}></View>
                    </ScrollView>
                </View>
            </Modal>
        </Card>
    );
}

export default PricingDetails;

const styles = StyleSheet.create({
    cardContainer:{
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
    },
    heading:{
        fontSize: 16,
        marginBottom: 10,
        color: '#626262',
        fontWeight: '700',
    },
    textContainer:{
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    total:{
        fontWeight: '700'
    },
    checkboxContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    checkboxText:{
        marginRight: 15,
    },
    couponsContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        marginTop: 10,
        width: '95%',
        backgroundColor: '#FFF'
    },
    coupons:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textContent:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContent:{
        padding: 10,
    },
    coupon:{
        fontWeight: '700',
        backgroundColor: '#FEFAD7',
        padding: 7,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#D8B828',
        borderRadius: 6,
    },
    couponDesc:{
        marginLeft: 10,
        marginBottom: 10, 
    },
    couponHeading:{
        marginLeft: 10,
        marginTop: 10,
    },
    applyCoupon:{
        height: '100%',
        backgroundColor: '#FAFAFA',
        paddingBottom: 30,
    }
})