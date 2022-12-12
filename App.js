import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import StartScreen from './Screens/StartScreen';
import OverScreen from './Screens/OverScreen';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './Screens/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [ userNumber, setUserNumber ]=useState( )
const [gameIsOver,setGamneIsOver]= useState( true)

  function pickNumberHandler( pickNumber){
    setUserNumber(pickNumber)
    setGamneIsOver(false) // cập nhật trạng thái 
  }
  function gameIsOverHandler (){
    setGamneIsOver(true)
  }
  let screen = <StartScreen  onPickNumber={pickNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={ userNumber} onGameOver={gameIsOverHandler} />
  }
  if(gameIsOver && userNumber){ // kiểm tra trò chơi đã kết thúc chưa và sd useNumber ktra
    screen=<OverScreen/>
  }

  return (
    <View style={styles.container}>
      <ImageBackground
      style={{flex:1}}
        source={require('./asset/background.jpg')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}>
        {/* <StartScreen /> */}
        {screen}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent600,
    // alignItems:'center',
    // justifyContent:'center'
  },
  backgroundImage:{
    opacity: 0.6 //  độ trong suốt
  }
});
