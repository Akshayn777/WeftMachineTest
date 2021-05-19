import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

const HomeHeader = ({ navigation }) => {
  return (
      <View style={styles.conatinerStyle}>
           <View style={styles.iconContainerLeft}>
      </View>
      <View style={styles.constantContainer}>
          <Text style={styles.textStyle}>PlayList</Text>
      </View>
      <View style={styles.iconContainerRight}>
      </View>
      </View>
  );
};
const DetailHeader = ({ navigation }) => {
    return (
        <View style={styles.conatinerStyle}>
             <View style={styles.iconContainerLeft}>
        </View>
        <View style={styles.constantContainer}>
            <Text style={styles.textStyle}>Song Details</Text>
        </View>
        <View style={styles.iconContainerRight}>
        </View>
        </View>
    );
  };
  const ProfileHeader = ({ navigation }) => {
    return (
        <View style={styles.conatinerStyle}>
             <View style={styles.iconContainerLeft}>
        </View>
        <View style={styles.constantContainer}>
            <Text style={styles.textStyle}>Profile</Text>
        </View>
        <View style={styles.iconContainerRight}>
        </View>
        </View>
    );
  };

const styles = {
  conatinerStyle: {
    backgroundColor: '#ffff',
    height:hp('8%'),
    width:wp('100%'),
    flexDirection:'row'
  },
  constantContainer:{
    height:hp('8%'),
    width:wp('60%'),
    backgroundColor:'#42263b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainerLeft:{
    height:hp('8%'),
    width:wp('20%'),
    backgroundColor:'#42263b',
  },
  iconContainerRight:{
    height:hp('8%'),
    width:wp('20%'),
    backgroundColor:'#42263b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle:{
    fontSize:15,
    fontWeight:'bold',
    color:'#ffff'
}
};
export {HomeHeader,DetailHeader,ProfileHeader};
