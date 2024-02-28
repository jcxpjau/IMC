import { StatusBar } from 'expo-status-bar';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from "react";


export default function App() {

  const [ peso, setPeso ] = useState(0);
  const [ altura, setAltura ] = useState(0);
  const [ imc, setImc ] = useState();
  const [ cor, setCor ] = useState( "blue" );

  function CalculaImc()
  {
    Keyboard.dismiss();
    if( peso != 0 && altura != 0 ) {
      
      let pesoNovo = peso.replace( "," , "." );
      let alturaNovo = altura.replace( "," , "." ) * altura.replace( "," , "." );
      let imcCalculado = ( pesoNovo / alturaNovo ).toFixed(2);
      setImc( imcCalculado );

      if( imcCalculado > 25 ) {
        setCor( "red" );
      } else {
        setCor( "blue" );
      }
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>IMC</Text>
      <Text>Indíce de Massa Corporea</Text>
      <TextInput
        placeholder="Insira seu peso"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={ (digitado) => setPeso( digitado ) }
        TextInput={peso}
      />
      <TextInput
        placeholder="Insira sua altura"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={ (digitado) => setAltura( digitado ) }
        TextInput={altura}
      />
      <TouchableOpacity style={styles.btn} onPress={CalculaImc}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={ [ styles.resultado , {color: cor } ] }>{imc}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15
  },
  input: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginTop: 25,
    marginBottom: 25
  },
  resultado: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: "bold"
  },
  btn: {
    width: "90%",
    height: 60,
    backgroundColor: "green",
    borderRadius: 5
  },
  btnText: {
    color: "white",
    textAlign: "center",
    lineHeight: 60,
    fontSize: 25,
    fontWeight: "bold"
  }
});

