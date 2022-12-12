import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Children} from 'react/cjs/react.production.min';
import Colors from '../../constants/Colors';

export default function UIButton({children,onPress}) {
 
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: Colors.primary600}} //ấn chạy 2 bên
        style={( {pressed})=>pressed ? [styles.buttonContainer,styles.pressed] : styles.buttonContainer} // truyền thêm đối tượng styles để thăng thêm hiệu ứng
        > 
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonContainer: {
    backgroundColor:Colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed:{
    opacity:0.75 , // độ mờ

  }
});
