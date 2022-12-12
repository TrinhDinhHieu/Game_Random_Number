import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../component/ui/Title';
import Colors from '../constants/Colors';
import NumberContainer from '../component/game/NumberContainer';
import UIButton from '../component/ui/UIButton';
import LinearGradient from 'react-native-linear-gradient';

//random so ngau nhien
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoudary = 1;
let maxBoudary = 100;
export default function GameScreen({userNumber,onGameOver}) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber,
  );
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  useEffect (()=>{
    if (currentGuess === userNumber){
      onGameOver()
    }
   } ,[ currentGuess,userNumber,onGameOver])
  function nextGuessHandler(direction) {
    //direction => lower, greater
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
        Alert.alert("Don't lie !", 'You now that this is wrong ...', [ {text:'sorry', style:'cancel'}])
        return
    }
    if (direction === 'lower') {
      maxBoudary = currentGuess;
    } else {
      minBoudary = currentGuess + 1;
    }
  
    const newRndNumber = generateRandomBetween(
      minBoudary,
      maxBoudary,
      currentGuess,
    );
    setcurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponemt's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={{color: 'black', fontSize: 18}}>Higher or Lower ? </Text>
        <View>
          <UIButton onPress={nextGuessHandler.bind(this, 'lower')}>- </UIButton>
          <UIButton onPress={nextGuessHandler.bind(this, 'greater')}>
            {' '}
            +{' '}
          </UIButton>
        </View>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500600,
  },
});
