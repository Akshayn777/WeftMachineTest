import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity,ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMail from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {RegisterUser} from '../apiCollection/apiUrl';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [userName,setUserName] = useState('');
    const [userEmail,setemail] = useState('');
    const [userPhone,setPhone] = useState('');
    const [userPassword,setPassword] = useState('');
    useEffect(() => {
        
    }, []);
    function signUpClick() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(userEmail)===true){
            ToastAndroid.show("Email validated successfully", ToastAndroid.LONG);
        }
        else{
            ToastAndroid.show("Please enter valid email", ToastAndroid.LONG);
        }
        const data = {
           name:userName,
           email:userEmail,
           phone:userPhone,
           password:userPassword
        }
        console.log(data);
        axios
            .post('http://localhost:3000/api/register',data)
            .then(async res => {
                console.log('DATA', res.data);
                navigation.naviagte('LogIn')
                setLoader(false);
            })
            .catch(error => {
                //alert("Some thing wrong")
                console.log(error);
            });
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <Icon name='user' size={30} color="#5cd691" />
                    <TextInput
                        placeholder="Username"
                        style={styles.textInputContainer}
                        showSoftInputOnFocus={true}
                        onChangeText={setUserName} />
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <IconMail name='email' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true} 
                            onChangeText={setemail}
                            />
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='mobile-phone' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true} 
                            onChangeText={setPhone}
                            />
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='lock' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Password"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true} 
                            onChangeText={setPassword}
                            secureTextEntry={true}/>
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
               <TouchableOpacity
               style={styles.buttonContainer}
               onPress={()=>signUpClick()}>
                   <Text style={styles.textStyle}>Signup</Text>
                   </TouchableOpacity>
               </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: '#0a2a45',
        alignItems: 'center'
    },
    contentContainer: {
        height: hp('100%'),
        width: wp('100%'),
        paddingTop: hp('10%'),
        alignItems: 'center'
    },
    backgroundImage: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
    textStyle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    textStyleRegister: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    textStyleRegisterSignup: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#ffff',
        paddingLeft:wp('2%')
    },
    textInputContainer: {
        height: hp('7%'),
        width: wp('80%'),
        paddingLeft: wp('5%'),
        fontSize: hp('3%'),
    },
    inputContainer: {
        height: hp('7%'),
        width: wp('90%'),
        flexDirection: 'row',
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        height:hp('7%'),
        width:wp('80%'),
        backgroundColor:'#217a5a',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerNavigation:{
        flexDirection:'row',
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RegisterScreen;