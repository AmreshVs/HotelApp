import React from 'react';
import { Text, Card, CheckBox, Button } from '@ui-kitten/components';
import { StyleSheet, View, Modal, ScrollView } from 'react-native';
import TopNavSimple from '../navigation/topNavSimple';
import ExtraServices from './extraServices';

const PricingDetails = (props) => {
    const quantitytypes = props.data.data.quantity_types !== undefined ? Object.values(props.data.data.quantity_types) : null;
    // console.log(quantitytypes);
    const [coupon, setCoupon] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [selectCoupon, setSelectCoupon] = React.useState('');
    const [couponPrice, setCouponPrice] = React.useState('');
    var servicesId = 0;

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

    const closeModal = (item, price) => {
        setSelectCoupon(item);
        setCouponPrice(price);
        setModal(!modal);
    }

    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.heading}>Pricing Details & Extra Services</Text>
            <View style={styles.textContainer}>
                {selectCoupon === '' ? <Text>Apply Coupon</Text> : <Text style={[styles.coupon, {marginTop: 10}]}>Coupon : {selectCoupon}</Text>}
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxText}>{selectCoupon === '' ? '' : '₹'+couponPrice}</Text>
                    {props.data.data.coupons !== undefined ? <CheckBox checked={coupon} onChange={openModal} /> : <CheckBox disabled={true} /> }
                </View>
            </View>
            {props.data.data.services !== undefined && props.data.data.services.map((item) => {
                servicesId++
                return <ExtraServices key={item.service_id} id={servicesId} service_id={item.service_id} name={item.service_name} desc={''} quantity={quantitytypes.includes(item.service_type) ? false : true} price={'₹'+item.price} />
            })}
            <View style={styles.textContainer}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>₹{props.data.data.price !== undefined ? props.data.data.price.total : 0}</Text>
            </View>
            {props.data.data.price !== undefined &&
                <View> 
                    <View style={styles.textContainer}>
                        <Text>Discount</Text>
                        <Text>- ₹{props.data.data.price.discount_price}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.total}>Total After Discount</Text>
                        <Text style={styles.total}>₹{props.data.data.price.discount_after_price}</Text>
                    </View>
                </View>
            }
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
                            {props.data.data.coupons !== undefined && Object.values(props.data.data.coupons).map((item) => {
                                return(
                                    <View style={styles.container} key={item.id}>
                                        <View style={styles.coupons}>
                                            <View style={styles.textContent}>
                                                <Text style={styles.coupon}>
                                                    {item.code}
                                                </Text>
                                            </View>
                                            <View style={styles.btnContent}>
                                                <Button style={styles.button} appearance='outline' size='tiny' onPress={() => closeModal(item.code, item.discount_price)}>Apply</Button>
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