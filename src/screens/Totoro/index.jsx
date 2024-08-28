import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Totoro() {
  const Navigation = useNavigation()
  return (
    <View>
      <Text>My neighbor Totoro</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Back to home</Text>
      </TouchableOpacity>
    </View>
  )
}