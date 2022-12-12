import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';
import UIButton from '../component/ui/UIButton';
import Colors from '../constants/Colors';
import Title from '../component/ui/Title';

export default function StartScreen( {onPickNumber}) {
    const [enterNumber, setEnterNumber]=useState()

    const numberInputHander=(enteredText)=>{
        setEnterNumber(enteredText)
    }
    const resetInputHandler =()=>{
        setEnterNumber( ' ')
    }
    const ConfirmInputHandler=()=>{
      const choseNumber= parseInt(enterNumber);
      if( isNaN(choseNumber)  || choseNumber<= 0 || choseNumber>90){
       Alert.alert('số không hợp lệ', 'số phải từ 1 đến 99',[{text:'Oke', style:'destructive',onPress: resetInputHandler  }])
        return;
      }
      onPickNumber(choseNumber);
    }
  return (
    <View style={styles.rootContainer}>
      <Title > Game Random Number</Title>
    <View style={styles.Input}>
      <Text style={styles.TextNumber}>Enter a Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={3}
        keyboardType="number-pad"
        autoCapitalize="none" //viết hoa
        autoCorrect={false}   // tự động sửa lỗi
        value={enterNumber}
        onChangeText={numberInputHander}
      />
      <UIButton onPress={resetInputHandler}>Reset</UIButton>
      <UIButton onPress={ConfirmInputHandler}>Confirm</UIButton>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    paddingTop:100,
    // alignItems:'center'
  },
  Input: {
    
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: Colors.primary400 ,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    // tạo bóng
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color:Colors.accent500 ,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf:'center'
  },
  TextNumber:{
    alignSelf:'center',
    fontSize:18,
    color:Colors.accent600
  }
});
// muốn thêm styles vào các thẻ View, text , .. thì sd [ ]
// VD style = {[styles.TextNumber, styles.numberInput] }
// nếu muốn custom style ở component khác thì để biến là style