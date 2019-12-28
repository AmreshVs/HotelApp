import React from 'react';
import { Text, CheckBox, Icon, Tooltip } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const ExtraServices = (props) => {
    const [count, setCount] = React.useState(0);
    const [visible, setVisible] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const RenderQuantity = () => {
        return(
            <View style={styles.counterContainer}>
                <Ripple onPress={() => count >= 0 ? setCount(count+1) : 0}>
                    <Icon name='plus-outline' width={20} height={20} fill='#AAA' />
                </Ripple>
                <Text style={styles.count}>{count}</Text>
                <Ripple onPress={() => count > 0 ? setCount(count-1) : 0}>
                    <Icon name='minus-outline' width={20} height={20} fill='#AAA' />
                </Ripple>
            </View>
        )
    }

    return(
        <View style={styles.cardContainer}>
            <View>
                <View style={styles.textInfo}>
                    <Text>{props.name}</Text>
                    {props.desc !== '' && 
                        <Tooltip
                        visible={visible}
                        text={props.desc}
                        placement='right'
                        onBackdropPress={() => setVisible(!visible)}>
                            <Icon name='info-outline' style={styles.infoIcon} fill='#626262' onPress={() => setVisible(!visible)} />
                        </Tooltip>
                    }
                    
                </View>
            </View>
            <View style={styles.quantityText}>
                {props.quantity === true &&  <RenderQuantity/>}
                <View style={styles.checkText}>
                    <Text style={styles.price}>{props.price}</Text>
                    <CheckBox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                </View>
            </View>
        </View>
    );
}

export default ExtraServices;

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    quantityText:{
        flexDirection: 'row'
    },
    counterContainer:{
        flexDirection: 'row',
        marginRight: 30,
    },
    price:{
        width: 70,
        marginRight: 10,
        textAlign: 'right'
    },
    count:{
        marginLeft: 10,
        marginRight: 10,
    },
    desc:{
        fontSize: 13,
    },
    textInfo:{
        flexDirection: 'row'
    },
    infoIcon:{
        width: 15,
        height: 15,
        marginLeft: 5,
    },
    checkText:{
        flexDirection: 'row',
    }
})