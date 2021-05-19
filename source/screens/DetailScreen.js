import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Details } from '../apiCollection/apiUrl';
import Loader from '../constants/Loader';
import Moment from 'moment';
import {DetailHeader}  from '../constants/HeaderDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DetailScreen = ({ navigation,route }) => {
    const [filterData, setFilterData] = useState([])
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        getData();
    }, []);
    function getData() {
        const {Id}  = route.params;
        axios
            .get(`${Details}page=${Id}&limit=1`)
            .then(async res => {
                setFilterData(res.data);
                setLoader(false);
            })
            .catch(error => {
                //alert("Some thing wrong")
                console.log(error);
            });
    }
    return (
        <View style={styles.mainContainer}>
              <DetailHeader/>
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
            {filterData.map((data)=>
            <Image source={{ uri: data.thumbnail }} style={{ height: 100, width: 100 }} />)}
            </View>
            <View style={styles.textContainer}>
            {filterData.map((data)=>
            <Text style={styles.textStyle}>{data.title}</Text>
            )}
            {filterData.map((data)=>
            <Text style={styles.textStyle}>{data.album}</Text>
            )}
            {filterData.map((data)=>
            <Text style={styles.textStyle}>Created Date : {Moment(data.createdAt).format('DD/MM/YYYY')}</Text>
            )}
            </View>
            </View>
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
        flexDirection: "column",
        height: hp('35%'),
        width: wp('90%'),
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
    },
    imageContainer: {
        height: hp('15%'),
        width: wp('90%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:hp('7%')
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('15%'),
        width: wp('90%'),   
        paddingTop:hp('7%')   
    }
})

export default DetailScreen;