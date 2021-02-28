import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';

class Converter extends Component{
  constructor(props){
    super(props);

    this.state = {
      input:'',
      tl:'0',
      usd:'0',
      gbp:'0',
      cad:'0',
      jpy:'0',
      eur:'0',
      rates:[],
      usd1:'',
      gbp1:'',
      cad1:'',
      jpy1:'',
      eur1:'',
    };

    this.getRates = this.getRates.bind(this);
  }

  getRates(){
    axios.get('http://data.fixer.io/api/latest?access_key=fef75276355d3b5c5afc97af851940bd&symbols=EUR,TRY,USD,GBP,CAD,JPY')
         .then(response =>{
           const rates = response.data.rates;
           this.setState({
             rates:rates,
             eur1:(rates.TRY / rates.EUR).toFixed(3),
             usd1:(rates.TRY / rates.USD).toFixed(3),
             gbp1:(rates.TRY / rates.GBP).toFixed(3),
             jpy1:(rates.TRY / rates.JPY).toFixed(3),
             cad1:(rates.TRY / rates.CAD).toFixed(3),
           });
           console.log(rates);
         });
  }



  componentDidMount(){
    console.log('componentDidMount');
    this.getRates();
  }

  render()  {
    const {converterWrapper,inputStyle,textStyle,textRow} = styles;
    let { input, tl, usd, gbp, cad, jpy, eur, rates, usd1, gbp1, cad1, jpy1, eur1 } = this.state;
    return (
      <View stye={converterWrapper}>
        <TextInput placeholder="Enter TRY Amount"
        style={inputStyle}
        keyboardType="numeric"
        onChangeText={(text) =>{
          const i = parseFloat(text) || 0;
          this.setState({
            input:text,
            eur:(i * (rates.TRY / rates.EUR)).toFixed(3),
            usd:(i * (rates.TRY / rates.USD)).toFixed(3),
            gbp:(i * (rates.TRY / rates.GBP)).toFixed(3),
            jpy:(i * (rates.TRY / rates.JPY)).toFixed(3),
            cad:(i * (rates.TRY / rates.CAD)).toFixed(3),
            eur1:(rates.TRY / rates.EUR).toFixed(3),
            usd1:(rates.TRY / rates.USD).toFixed(3),
            gbp1:(rates.TRY / rates.GBP).toFixed(3),
            jpy1:(rates.TRY / rates.JPY).toFixed(3),
            cad1:(rates.TRY / rates.CAD).toFixed(3),
          });
          console.log(tl);
        }}
        value={input}
        />
        <View style={textRow}>
          <Text style={textStyle}>1 EUR : {eur1} TL </Text>
          <Text style={textStyle}>EUR : {eur} TL </Text>
        </View>
        <View style={textRow}>
          <Text style={textStyle}>1 USD : {usd1} TL </Text>
          <Text style={textStyle}>USD : {usd} TL </Text>
        </View>
        <View style={textRow}>
          <Text style={textStyle}>1 GBP : {gbp1} TL </Text>
          <Text style={textStyle}>GBP : {gbp} TL </Text>
        </View>
        <View style={textRow}>
          <Text style={textStyle}>1 JPY : {jpy1} TL </Text>
          <Text style={textStyle}>JPY : {jpy} TL </Text>
        </View>
        <View style={textRow}>
          <Text style={textStyle}>1 CAD : {cad1} TL </Text>
          <Text style={textStyle}>CAD : {cad} TL </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  converterWrapper: {
    paddingTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    alignItems: 'center',
    width:'100%',
    height:'10%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize:20,
    textAlign:'center',
    marginBottom:'2%'
  },
  textStyle: {
    paddingTop:'8%',
    width: '50%',
    height:90,
    fontWeight: 'bold',
    fontSize:18,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign:'center',
    color:'white',
    backgroundColor:'#E3797C'
  },
  textRow: {
    flexDirection: "row",
  },
});

export default Converter;
