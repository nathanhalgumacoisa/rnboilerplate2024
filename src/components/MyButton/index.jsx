import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MyButton = ({ screen, name}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default MyButton