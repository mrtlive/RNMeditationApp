import React from 'react';
import {Home, Profile, Welcome, Music} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectIsLoggedIn, selectUser} from './redux/slices/authSlice';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setSignOut, setUser} from './redux/slices/authSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#273537',
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const isLoggedInTest = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const checkUser = () => {
      if (isLoggedInTest == true) {
        dispatch(setSignIn(true));
        dispatch(setUser(user));
        console.log(isLoggedInTest);
      } else {
        dispatch(setSignOut(true));
        console.log(isLoggedInTest);
      }
    };

    checkUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedInTest ? (
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
