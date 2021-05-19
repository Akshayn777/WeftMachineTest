import React from 'react';
import {View,Text,StyleSheet}  from 'react-native';
import {ProfileHeader}  from '../constants/HeaderDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileScreen =({navigation})=>{
    return(
        <View style={styles.mainContainer}>
            <ProfileHeader/>
            <Text style={styles.textStyle} 
            onPress={()=>navigation.navigate('Home')}>Go to Home</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#0a2a45',
    },
    textStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'#ffff',
        textAlign:'center',
        paddingTop:hp('40%')
    }
})

export default ProfileScreen;