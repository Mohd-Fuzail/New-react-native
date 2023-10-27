import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Component2 = () => (
  <View style={styles.container}>
    <Text style={styles.title1}>Welcome to my project</Text>
    <Text style={styles.title2}>We love React Native</Text>
    <Text style={styles.title3}>React Native</Text>
    <View style={styles.container1}>
    <Text style={styles.title}>React Native</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
       
        backgroundColor: '#eaeaea',
        
      },
  container1: {
    flex: 1,
    padding: 24,
    borderWidth: 4,
    borderColor: '#20232a',
    backgroundColor: '#eaeaea',
    
  },
  title1: {
    color: '#20232a',
    fontSize: 40,
    fontWeight: 'bold',

  }, title2: {
    color: '#20232a',
    fontSize: 30,
 },
  title3: {
    color:'#20232a',
    
    fontSize: 40,
    fontWeight: 'bold',

  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Component2;