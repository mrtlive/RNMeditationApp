import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

import {MusicList} from '../../components';

const Music = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#273537',
        paddingTop: 64,
        alignItems: 'center',
      }}>
      <View style={styles.contentCol}>
        <View style={styles.musicbox}>
          <Text style={styles.musictext}>Relax Sounds</Text>
        </View>
      </View>
      <View style={styles.contentCofl}>
        <MusicList title={'Painting Forest'} />
        <MusicList title={'Mountaineers'} />
        <MusicList title={'Lovely Deserts'} />
        <MusicList title={'The Hill Sides'} />
      </View>
    </View>
  );
};

export default Music;
