import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

const VideoBox = props => {
  return props.textPos == 'left' ? (
    <>
      <View style={styles.box2}>
        <LottieView
          source={props.source}
          autoPlay
          loop
          resizeMode="contain"
          style={props.pos}
        />
        <View style={styles.textarea}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Meditation 101</Text>
          <Text style={{fontSize: 12, fontWeight: '100'}}>
            Techniques, Benefits, and a Beginner's How-To
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Watch Now !
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  ) : (
    <>
      <View style={styles.box2}>
        <View style={styles.textarearight}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Meditation 101</Text>
          <Text style={{fontSize: 12, fontWeight: '100'}}>
            Techniques, Benefits, and a Beginner's How-To
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Watch Now !
            </Text>
          </TouchableOpacity>
        </View>
        <LottieView
          source={props.source}
          autoPlay
          loop
          resizeMode="contain"
          style={props.pos}
        />
      </View>
    </>
  );
};

export {VideoBox};
