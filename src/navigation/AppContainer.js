import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import AddScreen from '../screens/AddScreen/AddScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import {View, Text, StyleSheet, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            right: 20,
            left: 20,
            bottom: 15,
            height: 70,
            borderRadius: 10,
            elevation: 1,
            backgroundColor: '#000',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/icons/home.png')}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? '#7DAEDF' : '#aaa',
                    }}
                  />
                  <Text
                    style={{fontSize: 10, color: focused ? '#7DAEDF' : '#aaa'}}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/icons/chat.png')}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? '#7DAEDF' : '#aaa',
                    }}
                  />
                  <Text
                    style={{fontSize: 10, color: focused ? '#7DAEDF' : '#aaa'}}>
                    Chat
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 45,
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: focused ? '#5E7CC2' : '#bbb',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/icons/plus.png')}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: '#fff',
                    }}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/icons/search.png')}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? '#7DAEDF' : '#aaa',
                    }}
                  />
                  <Text
                    style={{fontSize: 10, color: focused ? '#7DAEDF' : '#aaa'}}>
                    Search
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="setring"
          component={SettingScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/icons/settings.png')}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: focused ? '#7DAEDF' : '#aaa',
                    }}
                  />
                  <Text
                    style={{fontSize: 10, color: focused ? '#7DAEDF' : '#aaa'}}>
                    Setting
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
