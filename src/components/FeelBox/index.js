import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

const FeelBox = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <LottieView
        source={props.source}
        autoPlay
        loop
        style={styles.box}
        resizeMode={'cover'}
      />
      <Text style={{color: 'white'}}>Calm</Text>
    </View>
  );
};

export {FeelBox};
