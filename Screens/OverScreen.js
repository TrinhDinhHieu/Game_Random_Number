import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../component/ui/Title'
import Colors from '../constants/Colors'

export default function OverScreen() {
  return ( // Đầu ngăn xếp sẽ về chế độ Game Over
    <View style={styles.rootScreen}>
      <Title >Game over</Title>
      <View style={styles.imageContainer}>
    <Image source={require('../asset/background.jpg')} style={styles.image}/>
      </View>
      <Text style={styles.textEnd}> END GAME </Text>
      <Text style={styles.textEnd}>PLEASE START AGAIN</Text>
     {/*  Custom màu Text trong Text */}
      
       {/* <Text> Vị trí bạn cần đánh dấu  <Text>X</Text> ,<Text>Y</Text> </Text> */}
    </View>
  )
}
const styles=StyleSheet.create({
  rootScreen:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center',

  },
  imageContainer:{
    width:250,
    height:250,
    borderRadius:130,
    borderWidth:3,
    borderColor:Colors.primary600,
    overflow:'hidden',
    margin:50,
    

  },
  image:{
    height:'100%',
    width:'100%'
  },
  textEnd:{
    fontSize:32,
    color:'white',

  }
})