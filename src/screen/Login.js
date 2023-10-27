import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

const Login = () => {
    const [text, setText] = useState('');
    // console.log(text);
    const [pass, setPass] = useState('');
    // console.log(pass);
    const [isChecked, setChecked] = useState(false);
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.text1}>Login</Text>
      </View>
      <Text style={styles.text2}>Enter UserID</Text>
      <TextInput
        style={styles.input}
        onChangeText={(a)=>setText(a)}
        value={text}
      />

      <Text style={styles.text2}>Enter Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(a)=>setPass(a)}
        value={pass}
      />
        
        <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#2E86C1' : undefined}
        />
        <Text style={styles.paragraph}>Click if accept all terms and conditions.</Text>
      </View>
      <TouchableOpacity style={{
        alignItems: 'center',
        backgroundColor:`#${!isChecked? '626567' : '2E86C1'}`,
        padding: 10,
        marginHorizontal:10,
        marginVertical:20,
      }} 

        onPress={() => {if(text==='fuzail'&& pass==='abc')Alert.alert(`Login successfully! ${text} 😊`);else Alert.alert("UserID or Password is incorrect! 🤦‍♂️");}}
        disabled={!isChecked }
        >
        <Text style={styles.t1}>Log In</Text>
      </TouchableOpacity>
     
   
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
   container:{
    alignItems:'center',
    justifyContent:'center',
   },
    text1:{
        marginTop:40,
        fontSize:30,
        fontWeight:'bold',
    },
    text2:{
        // marginTop:40,
        fontSize:20,
        marginLeft:10,
        marginTop:20,
        paddingVertical:10,
        // display:'flex',
        // flex:1,
        // fontWeight:'bold',
    },
    text3:{
        marginTop:40,
        fontSize:30,
        fontWeight:'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
      },
      
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      paragraph: {
        fontSize: 12,
      },
      checkbox: {
        margin: 12,
      },
      button: {
        alignItems: 'center',
        // backgroundColor:`#${false? '626567' : '2E86C1'}`,
        padding: 10,
        marginHorizontal:10,
        marginVertical:20,
      },
      t1:{
        color:"white",
      }
})