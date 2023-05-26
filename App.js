import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calcular() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    if (alcool !== '' && gasolina !== '') {
      const valorAlcool = parseFloat(alcool);
      const valorGasolina = parseFloat(gasolina);
      const resul = valorAlcool / valorGasolina;

      if (resul < 0.7) {
        setResultado('É melhor abastecer com ALCOOL.');
      } else {
        setResultado('É melhor abastecer com GASOLINA');
      }
    } else {
      setResultado('');
    }
  };

  return (
    <View style={styles.container}>
		  
		  <View style={styles.blocoImagem}>
		  	<Image style={styles.imagem}
        		source={
					require('./assets/postinho.png')
				}
      		/>
		  </View>
		  
      <Text style={styles.title}>Calculadora de Combustível</Text>
      <TextInput
        placeholder="Digite o preço do álcool"
        value={alcool}
        onChangeText={setAlcool}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Digite o preço da gasolina"
        value={gasolina}
        onChangeText={setGasolina}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
	imagem:{
		width:180,
		height:180,
	},
	blocoImagem:{
	marginTop:30,
	},
  input: {
    width: '50%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    width: '30%',
    height: 48,
    backgroundColor: '#1d8989',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
