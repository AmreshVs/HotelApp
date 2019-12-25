import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ImageView from 'react-native-image-view';

const ImageViewer = (props) => {
    
    return (
        <SafeAreaView style={styles.background}>
            <ImageView
                images={props.images}
                imageIndex={0}
                isVisible={props.show}
                renderFooter={(currentImage) => (<View><Text style={{color: '#FFF'}}></Text></View>)}
                onClose={props.onClose}
            />
        </SafeAreaView>
    );
};

export default ImageViewer;

const styles = StyleSheet.create({
    background:{
        // backgroundColor: '#FAFAFA', 
        // height: '100%',
    },
});