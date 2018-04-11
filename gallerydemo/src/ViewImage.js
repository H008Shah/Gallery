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
  Button,
  Image
} from 'react-native';

import Camera_roll_picker from 'react-native-camera-roll-picker';
var image_list = [];

class ViewImage extends Component {
  constructor(props) {

    super(props);
    this.state =
      {
        image_display: '',
      }
    navigate = props.navigation.navigate;

    prof_detail = this.props.navigation.state.params.image_list;


    console.log("===prof_detail===" + prof_detail);
  }
  static navigationOptions = ({ navigation }) =>
    ({

      title: "View Image",
      // tabBarVisible:  (navigation.state.params && navigation.state.params.hideTabBar) == false,

      headerStyle:
        {
          backgroundColor: "#0B4F9C",

        },
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',

        fontSize: 18,
        color: "#FFFFFF"
      },
      headerTintColor: "#FFFFFF",


    });
  componentDidMount() {
    this.setState({ image_display: prof_detail });

  }


  render() {


    return (
      <View style={styles.container}>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
          position: 'relative'
        }}>

          <Image
            resizeMode="contain" style={styles.image_layout}
            source={{ uri: this.state.image_display }}>

          </Image>
        </View>

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
  image_layout:
    {
      height: 300,
      width: 300,

    },


  btn_view:
    {
      width: 200,
      height: 60,
      backgroundColor: '#0C66CC',
      justifyContent: 'center',
    },

  txt_view:
    {
      color: '#ffffff',
      textAlign: 'center',
      alignSelf: 'center'
    }

});
export default ViewImage;