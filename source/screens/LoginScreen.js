import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    function logIn() {
        const data = {
         username: userName,
         password: password
        }
        console.log(data);
        axios
            .post('http://localhost:3000/api/login',data)
            .then(async res => {
                console.log('DATA', res.data);
                navigation.naviagte('Home')
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
               onPress={()=>navigation.navigate('Home')}>
                   <Text style={styles.textStyle}>Login</Text>
                   </TouchableOpacity>
                   <View style={styles.registerNavigation}>
                       <Text style={styles.textStyleRegister}>Not a User ? </Text>
                       <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                       <Text  style={styles.textStyleRegisterSignup}>SignUp </Text>
                       </TouchableOpacity>
                       </View>
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
        paddingTop: hp('40%'),
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

export default LoginScreen;