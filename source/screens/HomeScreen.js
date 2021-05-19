import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ListApi } from '../apiCollection/apiUrl';
import Loader from '../constants/Loader';
import {HomeHeader}  from '../constants/HeaderDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    const [filterData, setFilterData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getData();
    }, []);
    function getData() {
        axios
            .get(ListApi)
            .then(async res => {
                setFilterData(res.data);
                setLoader(false);
            })
            .catch(error => {
                //alert("Some thing wrong")
                console.log(error);
            });
    }
    const renderItem = (item) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen',{Id:item.id})}>
            <View style={styles.cardContainer}>               
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.thumbnail }} style={{ height: 60, width: 60 }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Title     : {item.title}</Text>
                    <Text style={styles.textStyle}>Album : {item.album}</Text>
                </View>             
            </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.mainContainer}>
            <HomeHeader/>
            <FlatList
                data={filterData}
                renderItem={item => renderItem(item.item)} />
                  <Loader visible={loader} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#0a2a45',
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 10,
        flexDirection: "row",
        height: hp('15%'),
        width: wp('90%'),
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
    },
    imageContainer: {
        height: hp('15%'),
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})

export default HomeScreen;