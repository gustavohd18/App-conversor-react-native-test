
import React, {Component} from 'react';
import {TextInput,Text, View,Button,CheckBox} from 'react-native';
import conversor from './model/Conversor'
import styles from './estilos/AppEstilo'
export default class App extends Component {

  state = {
    numero: 0,
    numeroExibi: 'Aqui ira ser exibido o numero',
    checkedBi: false,
    checkedHe: false,
  }
  

  alterarNumero  = () => {
    let numeroTest = Number(this.state.numero)// garantindo que estou convertendo para numero
    if (this.state.checkedBi) {
      let numero = conversor.conversorBinario(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    } else if (this.state.checkedHe) {
      let numero = conversor.conversorHexadecimal(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    }    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.welcome}>Bem vindo ao Conversor Versão Beta!</Text>
        </View>
        <View style={styles.content}>
          <Text style={{textAlign: 'center',fontSize: 30}}>{this.state.numeroExibi}</Text>
          <TextInput 
          style={styles.input}
          placeholder= 'Digite o numero'
          onChangeText={(numero) => this.setState({numero:numero})}>  
          </TextInput>
          <View style={styles.viewCheck}>
              <CheckBox
              style={styles.check}
                value={this.state.checked}
                onValueChange={() => this.setState({ checkedBi: !this.state.checkedBi })}
              />
              <Text style={styles.textView}>Binario</Text>
              <CheckBox
              style={styles.check}
                value={this.state.checked2}
                onValueChange={() => this.setState({ checkedHe: !this.state.checkedHe })}
              />
              <Text style={styles.textView}>Hexadecimal</Text>
            </View>
            <View style={styles.buttonView}>
               <Button onPress={this.alterarNumero} title="Converter" ></Button>
            </View>
        </View>

      </View>
    );
  }
}
