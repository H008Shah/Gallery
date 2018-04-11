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
  CameraRoll,
  Button
} from 'react-native';

import Camera_roll_picker from 'react-native-camera-roll-picker';
var image_list = '';

class Gallery extends Component {


  constructor(props) {

    super(props);
    this.state =
      {
        image_display: '',
      }
    navigate = props.navigation.navigate;


  }

  static navigationOptions = ({ navigation }) =>
    ({

      title: "Gallery",
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

  getSelectedImages(images, current, ) {
    var num = images.length;


    console.log("====Photo222===" + num);
    image_list.length = 0

    // for(var i=0;i<images.length;i++)
    // {
    //   console.log("====Photo111==="+images[i].uri+"==num==="+num);

    //   image_list.push({'uri':images[i].uri,'name':'photo'+i+'.jpg'})
    // }
    if (num > 0) {
      console.log("====images===" + images[0].uri + "======" + JSON.stringify(images[0]) + "==current===" + JSON.stringify(current));

      image_list = images[0].uri;
      navigate('ViewImage', { image_list })
    }
  }

  render() {


    return (
      <View style={styles.container}>
        <Camera_roll_picker maximum={1} callback={this.getSelectedImages}
          backgroundColor={"#9C5E0B"}
          selectSingleItem={true} />



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
export default Gallery;