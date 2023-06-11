import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FileScreen from '../screens/FileScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          elevation: 0,
          backgroundColor: '#1b1b1b',
          height: 50,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let label;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              label = 'Home';
              break;
            case 'Files':
              iconName = 'file1';
              label = 'Files';
              break;
            case 'Add':
              return (
                <View style={styles.tabItemContainer}>
                  <View style={styles.addIconContainer}>
                    <Icon
                      name="plus"
                      size={20}
                      style={[styles.tabIcon, { color: '#1b1b1b'} ]}
                    />
                  </View>
                </View>
              );
            case 'Message':
              iconName = 'message1';
              label = 'Message';
              break;
            case 'Profile':
              iconName = 'user';
              label = 'Profile';
              break;
            default:
              iconName = 'home';
              label = 'Home';
              break;
          }
          return (
            <View style={styles.tabItemContainer}>
              <View style={styles.tabIconContainer}>
                <Icon
                  name={iconName}
                  size={20}
                  style={[
                    styles.tabIcon,
                    { color: focused ? '#ffff' : '#fff' },
                  ]}
                />
              </View>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Files" component={FileScreen} />
      <Tab.Screen name="Add" component={AddTaskScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top:5,
  },
  tabIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    color: '#ffff',
  },
  addIconContainer: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabs;
