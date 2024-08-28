import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const TextButton = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default TextButton