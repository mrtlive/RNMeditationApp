import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {AuthContext} from '../../AuthProvider';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const {username, setUsername, setIsLoggedIn} = React.useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await AsyncStorage.getItem('@user');
    const userObject = userData !== null ? JSON.parse(userData) : {};
    const user = userObject.name;
    setUsername(user);
  };

  const logout = () => {
    AsyncStorage.removeItem('@user');
    setIsLoggedIn(false);
    setUsername();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#273537', paddingTop: 64}}>
      <View style={styles.header}>
        <Text style={styles.text}>Profile Page</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            logout();
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentCol}>
        <View style={[styles.screen]}>
          <Image
            source={{
              uri: 'https://i.picsum.photos/id/345/200/300.jpg?hmac=_qOjrd4yW7rtmkQN1PgF8hczgXJezqk92MxgRUzB06s',
            }}
            style={styles.image}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Hello, {username} !</Text>
        </View>
        <View
          style={[
            styles.box2,
            {
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
            },
          ]}>
          <View style={styles.textarearight}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Custom Program For You !
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'white',
                marginVertical: 12,
              }}>
              Special Techniques for every movement. Join us get ready for
              everything. Stay Tune !
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Watch Now !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.box2,
            {
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
            },
          ]}>
          <View style={styles.textarearight}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Custom Program For You !
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'white',
                marginVertical: 12,
              }}>
              Special Techniques for every movement. Join us get ready for
              everything. Stay Tune !
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Watch Now !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
