import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class Header extends Component {

    constructor(props){
      super(props);

      this.state = {
        date:'',
      };
    }

  componentDidMount(){
    axios.get('http://data.fixer.io/api/latest?access_key=fef75276355d3b5c5afc97af851940bd&symbols=EUR,TRY,USD,GBP,CAD,JPY')
         .then(response =>{
           const date = response.data.date;
           this.setState({
             date:date,
           });
           console.log(date);
         });
  }

  render() {
    const { header, headerText } = styles;

    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
        <Text style={headerText}>{this.state.date}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdfe3',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop:3,
  }
});
