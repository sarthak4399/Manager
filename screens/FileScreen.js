import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
const FileScreen = () => {
  return (
    <View style={styles.maincontainer}>

      <TouchableOpacity style={styles.endicons}>
        <View style={styles.topcontainer}>
          <View style={styles.back}><Icon name="left" size={25}  color={"#1b1b1b"}/></View>
          <Icon name="sharealt" size={25} style={styles.sharicon} color={"#1b1b1b"} />
        </View>
      </TouchableOpacity>


    </View>
  )
}

export default FileScreen

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#b5cff8",
    width: "100%",
    height: "100%",
  },
  topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  endicons: {
    alignSelf:'flex-end',
    paddingLeft:10,
    paddingTop:10,
  }
,
back:{
  alignSelf:'flex-start',
  right:330 ,
  paddingLeft:10,
  paddingTop:10,
}
})