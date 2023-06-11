import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import avatar from '../assets/profile.png';
import Task from '../components/Task';
import Calendarstrip from '../components/CalendarStrip';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('pressed');
  };
  return (
    <View style={styles.fullScreen}>
    <ScrollView >    
      <View style={styles.header}>
        <Icon name="menu" size={35} color="white" style={styles.menu} />
        <TouchableOpacity onPress={toggleMenu}>

          <Image source={avatar} style={styles.logo} />

        </TouchableOpacity>  
      </View>
      <View style={styles.textcontainer}>

        <Text style={styles.Head}>Manage</Text>

        <Text style={styles.Head1}>Your task ✏️ </Text>

      </View>
      <Calendarstrip/>


        <Task/>

        <Task/>

        <Task/>
      
      </ScrollView> 
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: '#1b1b1b',
    width: '100%',
    height: '100%',
    marginBottom:10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  Head: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    width: '80%',
    padding: 10,
    fontFamily:'popins'
  },
  Head1: {
    flex: 1,
    flexDirection: 'column',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    width: '80%',
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  menu: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  textcontainer:{
    width:350,
    height:150,
  }
});
