import React from 'react';
import {Home, Profile, Welcome} from './screens';
import {AuthContext} from './AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 12,
          color: 'grey',
        },

        tabBarActiveBackgroundColor: {
          color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#273537',
          borderTopWidth: 0,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const {isLoggedIn, setIsLoggedIn, setUsername} =
    React.useContext(AuthContext);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user');
        const userObject = userData !== null ? JSON.parse(userData) : {};
        const loggedCheck = userObject.isLoading;
        const userName = userObject.name;
        if (loggedCheck != null) {
          setIsLoggedIn(loggedCheck);
          setUsername(userName);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
