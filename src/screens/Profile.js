import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors, Sizing} from '../styles';
import {ImageSource} from '../common/imageSource';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../component/Button';
import { AvatarBtn } from '../component/AvatarBtn';

const {width, height} = Dimensions.get('window');

export const Profile = () => {
  const [isLoginSaved, setIsLoginSaved] = useState(false);

  const handleLoginSaved = () => {
    setIsLoginSaved(!isLoginSaved);
  };

  const generateAlias = () => {

  }
  const next = () => {}

  return (
      <SafeAreaView style={styles.mainContainer}>

        {/* MAIN SCROLLVIEW COMPONENT */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainScrollView}>
            <LinearGradient
              colors={[ 'rgba(98, 132, 255, 0.3)', 'rgba(98, 132, 255, 0.2)', 'rgba(151, 255, 212, 0.3)']} // Start and end colors
              locations={[0.2, 0.9, 1]} // Stop positions
              style={{ flex: 1 }}
            >
                  <View style={styles.titleContainer}>
                      <Text style={styles.title}>Welcome New Player</Text>
                  </View>
                  <View style={styles.opacityContainer}>
                      <LinearGradient
                        colors={['#5163E0', '#8893F0','#D6E3F375']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1.2 }}
                        style={styles.inputTxt}
                      >
                          <LinearGradient
                            colors={['#5163E0', '#8893F0','#D6E3F375']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1.2 }}
                            style={styles.innerInputTxt}
                          >
                          <TextInput placeholder="" style={ styles.inputFont }/>
                         </LinearGradient>
                      </LinearGradient>
                  </View>
                  <View style={styles.opacityContainer}>                    
                      <Button title="Generate Alias" onClick={() => generateAlias()}/>
                  </View>

                  <View style={styles.cameraContainer}>
                      <TouchableOpacity style={styles.cameraBtn}>
                        <Image source={ImageSource.camera} style={styles.imgCamera} />
                      </TouchableOpacity>
                      <AvatarBtn title="Select From Files" />
                      <View>
                        <LinearGradient
                          colors={['#5163E0', '#8893F0','#D6E3F375']}
                          start={{ x: 0.5, y: 0 }}
                          end={{ x: 0.5, y: 1.2 }}
                          style={styles.keyInputTxt}
                        >
                          <LinearGradient
                            colors={['#5163E0', '#8893F0','#D6E3F375']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1.2 }}
                            style={styles.innerKeyInputTxt}
                          >
                            <TextInput style={styles.inputFont} placeholder="" />
                          </LinearGradient>
                        </LinearGradient>
                        <Text style={styles.opacityText}>Enter keyword</Text>
                      </View>
                  </View>

                  <View style={styles.photoMainContainer}>
                      <View style={styles.photoContainer}>
                        <Image source={ImageSource.avatar} style={styles.imgPhoto} />
                      </View>
                      <AvatarBtn title="Make My Avatar" />
                      <View style={styles.photoContainer}>
                        <Image source={ImageSource.cartoon_avatar} style={styles.imgPhoto} />
                      </View>
                  </View>

                  <View style={styles.opacityContainer}>
                    <TouchableOpacity>
                      <Button title="Next" onClick={() => next()}/>
                    </TouchableOpacity>
                  </View>
            </LinearGradient>
        </ScrollView>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    // borderWidth: 1,
    // paddingTop: 10 * Sizing.vh,
  },
  opacityContainer: {
    width:Sizing.vw * 70,
    alignSelf: "center",
    alignItems: 'center',
    marginTop: height * 0.01,
    // borderWidth: 2,
  },
  btnOpacity:{
    alignSelf: "center",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    width:Sizing.vw * 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    color: Colors.WHITE,
    // height: '100%',
  },
  opacityText: {
    fontSize: 20,
    color: 'rgba(59, 79, 125,1)',
    textAlign: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'rgba(59, 79, 125,1)',
  },
  titleContainer:{
    marginTop: Sizing.vh * 5,
    width: Sizing.vw * 80,
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: Sizing.vh * 5,
  },
  inputTxt: {
    width:Sizing.vw * 70,
    height: Sizing.vw * 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: 'center'
  },
  innerInputTxt: {
    width:Sizing.vw * 69,
    height: Sizing.vw * 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  inputFont: {
    color: Colors.WHITE,
    fontSize: 20,
    paddingLeft: 15,
    paddingRight:15,
  },
  keyInputTxt:{
    width:Sizing.vw * 40,
    height: Sizing.vw * 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: 'center'
  },
  innerKeyInputTxt:{
    width:Sizing.vw * 39,
    height: Sizing.vw * 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  keywordContainer: {
    width:Sizing.vw * 70,
    alignSelf: "center",
    alignItems: 'center',
    marginTop: Sizing.vh * 5,
  },
  cameraContainer: {
    flexDirection: 'row',
    width: Sizing.vw * 90,
    justifyContent: 'space-between',
    alignItems: "center",
    marginLeft: Sizing.vw * 5,
    marginTop: Sizing.vh * 5,
  },
  imgCamera: {
    width: Sizing.vw * 12,
    height: Sizing.vw * 12,
  },
  photoMainContainer: {
    flexDirection: 'row',
    width: Sizing.vw * 90,
    justifyContent: 'space-between',
    alignItems: "center",
    marginLeft: Sizing.vw * 5,
    marginTop: Sizing.vh * 5,
  },
  photoContainer: {
    marginTop: Sizing.vh * 7,
    marginBottom: Sizing.vh * 7,
    width: Sizing.vw * 30,
    height: Sizing.vw * 30,
    borderWidth: 2,
    borderColor: '#8893F0',
    borderRadius: 12,
     alignItems: "center",
    justifyContent: "center"
  },
  imgPhoto:{
    width: Sizing.vw * 27,
    height: Sizing.vw * 27,
    borderRadius: 12,
  }
});
