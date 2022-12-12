import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        borderWidth:3,
        borderColor:'white',
        padding:24,
        borderRadius: 10,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    }
})