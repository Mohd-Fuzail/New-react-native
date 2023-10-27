import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
 import Component1 from './src/screen/Component1';
 import Component2 from './src/screen/Component2';
 import Component4 from './src/screen/Component4';
import ImageFile from './src/screen/ImageFile';
import Api from './src/screen/Api';
import Api2 from './src/screen/Api2';
import Login from './src/screen/Login';

const App = () => {
  return (
    <View>
      {/* <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me" */}
      {/* /> */}
      {/* <Component1/> */}
      {/* <Component2/> */}
      {/* <ImageFile/> */}
      {/* <Component4/> */}
      {/* <Api/> */}
      {/* <Api2/> */}
    <Login/>
    </View>
  );
};

export default App;