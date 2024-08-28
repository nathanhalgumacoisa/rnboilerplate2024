import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';

export default function Ghibli() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Title title={"Ghibli"} />
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
      <MyButton screen={"Home"} name={"Back to home"} />
    </View>
  )
}