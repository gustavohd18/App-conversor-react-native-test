
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
    if (this.state.checkedBi && this.state.checkedHe == false) {
      let numero = conversor.conversorBinario(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    } 
    if (this.state.checkedHe && this.state.checkedBi == false) {
      let numero = conversor.conversorHexadecimal(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    }  
    if ((this.state.checkedBi && this.state.checkedHe)) {
      this.setState({numero:0})
      this.setState({numeroExibi:'Não é possivel converter'})
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
                value={this.state.checkedBi}
                onValueChange={() => this.setState({ checkedBi: !this.state.checkedBi })}
              />
              <Text style={styles.textView}>Binario</Text>
              <CheckBox
              style={styles.check}
                value={this.state.checkedHe}
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
