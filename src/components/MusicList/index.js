import {View, Text, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {W} from '../../utils/ui/dimension';

const MusicList = props => {
  return (
    <View style={styles.list}>
      <View>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/345/200/300.jpg?hmac=_qOjrd4yW7rtmkQN1PgF8hczgXJezqk92MxgRUzB06s',
          }}
          style={{width: 70, height: 70, borderRadius: 24}}
        />
      </View>
      <View style={{width: W(40), marginStart: 6}}>
        <Text style={{fontSize: 22, color: 'white'}}>{props.title}</Text>
        <Text style={{fontSize: 8, marginTop: 6, color: 'white'}}>
          505858 Listening
        </Text>
      </View>
      <View style={{marginStart: 32}}>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            fontStyle: 'italic',
          }}>
          25 Min
        </Text>
      </View>
    </View>
  );
};

export {MusicList};
