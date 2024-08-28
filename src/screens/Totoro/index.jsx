import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Totoro() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>My neighbor Totoro</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Back to home</Text>
      </TouchableOpacity>
    </View>
  )
}