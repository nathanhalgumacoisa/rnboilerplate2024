import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Totoro")}>
        <Text style={styles.text}>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}