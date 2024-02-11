import React from 'react';
import {View, TouchableOpacity,StyleSheet, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {useEffect, useRef} from 'react'
import { Colors, Sizing } from '../styles'


export const AvatarBtn = props => {
  const {title, onPress = () => null} = props
  //--------------------------------------Declare Veriables--------------------------------
  
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#5163E0','#8893F0','#D6E3F375']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.avatarBtn}
      >
      <LinearGradient
        colors={['#5163E0','#8893F0','#D6E3F375']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1.2 }}
        style={styles.innerAvatarBtn}
      >
            <Text style={styles.avatarText}>{ title }</Text>
      </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 
  avatarBtn: {
    alignSelf: "center",
    alignItems: 'center',
    width: Sizing.vw * 15,
    height: Sizing.vw * 15,
    // borderWidth: 2,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 12,
     alignItems: "center",
    justifyContent: "center"
  },
  innerAvatarBtn: {
    alignSelf: "center",
    alignItems: 'center',
    width: Sizing.vw * 14,
    height: Sizing.vw * 14,
    // borderWidth: 2,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 12,
     alignItems: "center",
    justifyContent: "center"
  },

  avatarText: {
    textAlign: "center",
    fontSize: 15,
    color: Colors.WHITE,
  },
  title: {
    fontSize: 35,
    color: "#0000E0",
  },
})
