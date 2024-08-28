import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';
import { useState } from 'react';

export default function Ghibli() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [personagem, setPersonagem] = useState("");

  const cadastrar = () => {
    console.log(`Nome do Filme: ${nomeFilme} - Personagem: ${personagem}`)
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <Title title={"Ghibli"} />
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
      <MyButton screen={"Home"} name={"Back to home"} />

      <View>
        <Text>Cadastro de Novo Filme</Text>

        <TextInput 
            placeholder="Nome do Filme"
            value={nomeFilme}
            onChangeText={setNomeFilme}
        />

        <TextInput 
            placeholder="Personagem principal"
            value={personagem}
            onChangeText={setPersonagem}
        />

        <TouchableOpacity onPress={cadastrar}>
          <Text>Salvar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}