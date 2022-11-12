import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AuthContext} from '../../AuthProvider';
import LottieView from 'lottie-react-native';

const Home = () => {
  const {username} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: '#273537', paddingTop: 64}}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome Back, {username} !</Text>
        <Text style={styles.miniText}>How are you feeling today ? </Text>
      </View>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../../img/47141-4-7-8-breathing-technique.json')}
            autoPlay
            loop
            style={styles.box}
            resizeMode={'cover'}
          />
          <Text style={{color: 'white'}}>Calm</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../../img/102120-breathing-lotus.json')}
            autoPlay
            loop
            style={styles.box}
            resizeMode={'cover'}
          />
          <Text style={{color: 'white'}}>Relax</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../../img/67675-meditation.json')}
            autoPlay
            loop
            style={styles.box}
            resizeMode={'cover'}
          />
          <Text style={{color: 'white'}}>Focus</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <LottieView
            source={require('../../img/31936-the-6-loading-circles.json')}
            autoPlay
            loop
            style={styles.box}
            resizeMode={'cover'}
          />
          <Text style={{color: 'white'}}>Anxies</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.contentCol}>
          <View style={styles.box2}>
            <LottieView
              source={require('../../img/22979-meditating-lady.json')}
              autoPlay
              loop
              resizeMode="contain"
              style={{left: 40}}
            />
            <View style={styles.textarea}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Meditation 101
              </Text>
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
          <View style={styles.box2}>
            <LottieView
              source={require('../../img/107370-meditation.json')}
              autoPlay
              loop
              style={{right: 90}}
              resizeMode={'contain'}
            />
            <View style={styles.textarearight}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Cardio Meditation
              </Text>
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
          <View style={styles.box2}>
            <LottieView
              source={require('../../img/67675-meditation.json')}
              autoPlay
              loop
              resizeMode={'contain'}
              style={{left: 40}}
            />
            <View style={styles.textarea}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Relax Basis
              </Text>
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
          <View style={styles.box2}>
            <LottieView
              source={require('../../img/107370-meditation.json')}
              autoPlay
              loop
              style={{right: 90}}
              resizeMode={'contain'}
            />
            <View style={styles.textarearight}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Cardio Meditation
              </Text>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
