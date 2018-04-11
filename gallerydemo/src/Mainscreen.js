/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

class Mainscreen extends Component
{

  constructor(props) 
  {
      super(props);

      
      navigate = props.navigation.navigate;

  }

  static navigationOptions = ({ navigation }) =>
  ({

    
   // tabBarVisible:  (navigation.state.params && navigation.state.params.hideTabBar) == false,
    
    headerStyle:
      {
        backgroundColor: "#0B4F9C",

      },
    

  });



  fun_Opengallery()
  {
    navigate('Gallery')
  }
 
  render() {
    return ( 
      <View style={styles.container}>

        <TouchableOpacity style={styles.btn_view} onPress={()=>this.fun_Opengallery()}>
                    <Text style={styles.txt_view}> Open Gallery </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  btn_view:
  {
      width:200,
      height:60,
      backgroundColor:'#0C66CC',
      justifyContent: 'center',
  },

  txt_view:
  {
     color:'#ffffff',
     textAlign:'center',
     alignSelf:'center'
  }

});
export default  Mainscreen;