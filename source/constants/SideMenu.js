import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function DrawerContent(props) {
    return (
        <SafeAreaView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    backgroundImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    pictureContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: 'white'
    },
    iconStyle: {
        height: 25,
        width: 25,
        paddingLeft: 20
    },
    textStyle: {
        fontSize: 20,

        color: '#0083C3',
        paddingLeft: 5
    }

});