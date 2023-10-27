import React from 'react';
import {Image,StyleSheet, View} from 'react-native';

const ImageFile= () => {
  
  return  (
  <View style={styles.textStyle}>
    
  <Image source={require('../../assets/pexels1.jpg')}
  style={styles.i}/ >
    </View>
  );
};
const styles = StyleSheet.create({
      textStyle: {
        height: 500,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      },
      listStyle: {
        textAlign: "center",
        margin: 20,
        padding: 10,
      },
      i:{
        width:300,
      height:300,      }
    });

export default ImageFile;