import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {setSignOut, selectUser} from '../../redux/slices/authSlice';
import {useSelector, useDispatch} from 'react-redux';
import {getDay} from '../../utils//js';

const Profile = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUser);

  const logout = () => {
    dispatch(setSignOut());
  };
  return (
    <View style={{flex: 1, backgroundColor: '#273537', paddingTop: 64}}>
      <View style={styles.header}>
        <View style={[styles.screen]}>
          <Image
            source={{
              uri: 'https://i.picsum.photos/id/345/200/300.jpg?hmac=_qOjrd4yW7rtmkQN1PgF8hczgXJezqk92MxgRUzB06s',
            }}
            style={styles.image}
          />
          <Text style={styles.text}>Hello, {username} !</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            logout();
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentCol}>
        <Text style={styles.text}>{getDay()}</Text>
      </View>
    </View>
  );
};

export default Profile;
