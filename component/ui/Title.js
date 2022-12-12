import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function Title({children}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.titles}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    screen: {
      paddingTop: 30,
      paddingHorizontal:10
    },
    titles: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      borderWidth:2,
      borderColor:'white'
    },
})