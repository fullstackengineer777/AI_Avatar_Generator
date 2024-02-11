import React from 'react';
import {View, TouchableOpacity,StyleSheet, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {useEffect, useRef} from 'react'
import { Colors, Sizing } from '../styles'
export const Button = props => {
  const {title, onPress = () => null} = props
  //--------------------------------------Declare Veriables--------------------------------
  
  return (
    <TouchableOpacity style={styles.btnShadow}>
      <LinearGradient
        colors={['#5163E0', '#8893F0','#D6E3F375']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.btnOpacity}
      >
        <LinearGradient
          colors={['#5163E0', '#8893F0','#D6E3F375']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1.2 }}
          style={styles.innerBtnOpacity}
        >
              <Text style={styles.opacityText}>{ title }</Text>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnOpacity:{
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    width:Sizing.vw * 50,
    height: Sizing.vw * 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
    // height: '100%',
    
  },
  innerBtnOpacity: {
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    width:Sizing.vw * 49,
    height: Sizing.vw * 10,

    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
  },
  btnShadow: {
    shadowColor: '#5163E0',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5, // Android only
  },
  cameraBtn: {
    width: Sizing.vw * 15,
    height: Sizing.vw * 15,
    // borderWidth: 2,
    borderColor: Colors.LIGHT_GREEN,
    borderRadius: 12,
     alignItems: "center",
    justifyContent: "center"
  },
  // btnInOpacity: {
  //   alignSelf: "center",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '100%', 
  //   width:Sizing.vw * 49,
  //   height: 46,
  //   borderRadius: 12,
  //   borderWidth: 1,
  //   borderColor: Colors.WHITE,
  //   color: Colors.WHITE,
  //   // height: '100%',
  // },
  opacityText: {
    fontSize: 20,
    color: Colors.WHITE,
  },
  title: {
    fontSize: 35,
    color: "#0000E0",
  },
})
