import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'

import { Avatar } from 'react-native-paper';
import avatar from '../assets/profile.png';
const Task = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.prioritytext}> High </Text>
        <TouchableOpacity>
            <Icon name="sharealt" size={20} style={styles.sharicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.Taskname}>
            <Text style={styles.Taskname1}>
              Designing the new task stack for educational purpose only !
            </Text>
            <Text style={styles.duedate}>
            <Icon name="calendar" size={20} style={styles.calendaricon} /> 16 Feb 
            </Text>
      </View>
      <View style={styles.bottomsec}>
      <Image source={avatar} style={styles.logo} />
      <Icon name="message1" size={20} style={styles.msgicon} />
      <Icon1 name="attachment" size={20}style={styles.attachmenticon} />
      </View>
    </View>
  )
}
export default Task

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#b5cff8",
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: "0.5%",
    alignSelf: 'center',
    padding: 10,
    marginBottom:13
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prioritytext: {
    backgroundColor: "#ffff",
    width: "20%",
    height: "90%",
    borderRadius: 20,
    padding: 7,
    color: "#1b1b1b",
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  sharicon: {
    backgroundColor: "#fff",
    borderRadius: 100,
    width: 40,
    height: 40,
    padding: 10,
    color: "#1b1b1b",
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  Taskname1:{
      color:"#1b1b1b",
      fontWeight:'bold',
      maxWidth:"90%",
      padding:10,
      fontSize:18
  },  
  duedate:{
    marginTop:10,
    padding:10,
    color:"#1b1b1b"
  },
  calendaricon:{
    backgroundColor:'transparent',
    fontSize:20
  },
  bottomsec:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    padding:10
  },
  msgicon: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 'auto', // Align to the right
  },
  attachmenticon: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10, // Add some spacing between icons
  },
});
