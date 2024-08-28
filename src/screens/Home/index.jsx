import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Home screen</Text>
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
    </View>
  )
}