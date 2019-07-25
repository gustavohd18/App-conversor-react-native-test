
import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View,Button,CheckBox} from 'react-native';
import conversor from './model/Conversor'

export default class App extends Component {

  state = {
    numero: 0,
    numeroExibi: 'Aqui ira ser exibido o numero',
    checked: false,
    checked2: false,
  }
  

  alterarNumero  = () => {
    let numeroTest = Number(this.state.numero)// garantindo que estou convertendo para numero
    if (this.state.checked) {
      let numero = conversor.conversorBinario(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    } else if (this.state.checked2) {
      let numero = conversor.conversorHexadecimal(numeroTest)
      this.setState({numero:numero})
      this.setState({numeroExibi:numero})
    }    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: '#612F74'}}>
            <Text style={styles.welcome}>Welcome Conversor 1.0!</Text>
        </View>
        <View style={{flex: 8, backgroundColor: 'white'}}>
          <Text style={{textAlign: 'center',fontSize: 30}}>{this.state.numeroExibi}</Text>
          <TextInput 
          style={{textAlign: 'center',fontSize: 30}}
          placeholder= 'Digite o numero'
                  onChangeText={(numero) => this.setState({numero:numero})}></TextInput>
          <View style={{ flexDirection: 'row',justifyContent:'center'}}>
              <CheckBox
              style={{alignItems: 'center' }}
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
              <Text style={{marginTop: 5}}>Binario</Text>
              <CheckBox
              style={{ alignItems: 'center' }}
                value={this.state.checked2}
                onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <Text style={{marginTop: 5}}>Hexadecimal</Text>
            </View>
            <View style={{ flexDirection: 'row',justifyContent:'center',paddingTop: 80}}>
               <Button onPress={this.alterarNumero} title="Converter" ></Button>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#612F74',
    
  },
  welcome: {
    flex:1,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingTop:15,
  },

});