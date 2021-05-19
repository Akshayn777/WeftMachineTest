import React from 'react';
import {View,Text,StyleSheet}  from 'react-native';
import Router from './source/navigation/Router';

const App =()=>{
    return(
       <Router/>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'red'
    },
})

export default App;