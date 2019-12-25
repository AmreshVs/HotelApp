import React from 'react';
import { Icon } from '@ui-kitten/components';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CircularBtnWithIcon from '../../components/buttons/circularBtn';

const TestScreen = () => {

    return (
        <View style={styles.topblock}>
            <CircularBtnWithIcon/>
        </View>
    );
};

const styles = StyleSheet.create({
    topblock: {
        marginTop: 50
    },
});

export default TestScreen;