import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Title title={"Home"} />
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
    </View>
  )
}