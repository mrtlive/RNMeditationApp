import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/slices/authSlice';
import {FeelBox, VideoBox} from '../../components';

const Home = () => {
  const username = useSelector(selectUser);
  return (
    <View style={{flex: 1, backgroundColor: '#273537', paddingTop: 64}}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome Back, {username} !</Text>
        <Text style={styles.miniText}>How are you feeling today ? </Text>
      </View>
      <View style={styles.container}>
        <FeelBox
          source={require('../../img/47141-4-7-8-breathing-technique.json')}
        />
        <FeelBox source={require('../../img/102120-breathing-lotus.json')} />
        <FeelBox source={require('../../img/67675-meditation.json')} />
        <FeelBox
          source={require('../../img/31936-the-6-loading-circles.json')}
        />
      </View>
      <ScrollView>
        <View style={styles.contentCol}>
          <VideoBox
            source={require('../../img/22979-meditating-lady.json')}
            pos={{left: 40}}
            textPos={'left'}
          />
          <VideoBox
            source={require('../../img/107370-meditation.json')}
            pos={{right: 90}}
            textPos={'right'}
          />
          <VideoBox
            source={require('../../img/67675-meditation.json')}
            pos={{left: 40}}
            textPos={'left'}
          />
          <VideoBox
            source={require('../../img/107370-meditation.json')}
            pos={{right: 90}}
            textPos={'right'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
