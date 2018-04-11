

import React from 'react';

import Mainscreen from './Mainscreen';
import Gallery from './Gallery';
import ViewImage from './ViewImage';



import { StackNavigator } from 'react-navigation';



const Navigator_view = StackNavigator({
  
    Mainscreen: {
    screen: Mainscreen,
    navigationOptions: {
      headerMode: 'Screen1',


    },

  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
        headerMode: 'Screen1',
  
  
      },
    },


    ViewImage: {
      screen: ViewImage,
      navigationOptions: 
      {
          headerMode: 'Screen1',
    
    
        },
      },
  
  
 
   

},);
// { 
//   headerMode: 'Screen1' 
//      },


export default Navigator_view; 