import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TextButton from '../TextButton';

const MyButton = ({ screen, name}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <TextButton text={name} />
    </TouchableOpacity>
  )
}

export default MyButton