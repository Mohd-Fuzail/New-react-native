import React from 'react';
import { useState } from "react";
import {Text,Image,FlatList} from 'react-native';


const Component4 = () => {
    const [images, setimages] = useState([
        {src:require('../../assets/pexels1.jpg'),key:'1'},
        {src:require('../../assets/pexels2.jpg'),key:'2'},
        {src:require('../../assets/pexels3.jpg'),key:'3'},
        {src:require('../../assets/pexels4.jpg'),key:'4'},
        {src:require('../../assets/pexels5.jpg'),key:'5'}
      ]);
      <FlatList
  horizontal={true} 
  showsHorizontalScrollIndicator={false} 
  data={images}
  renderItem={ ({images}) => {
    console.log(images.scr);
   return <Image source={images.src} 
    style={styles.i}/ >;
  }}
/>
}

//     const nam = [
//         {
//           index: "1",
//           name: "../../assets/pexels1.jpg",
//         },
//         {
//           index: "2",
//           name: "../../assets/pexels2.jpg",
//         },
//         {
//           index: "3",
//           name: "../../assets/pexels3.jpg",
//         },
//         {
//           index: "4",
//           name: "../../assets/pexels4.jpg",
//         },
//         {
//           index: "5",
//           name: "../../assets/pexels5.jpg",
//         },
//         {
//           index: "6",
//           name: "../../assets/pexels6.jpg",
//         },
//       ];
//       return (
//         <FlatList
//           style={styles.listStyle}
//           keyExtractor={(key) => {
//             return key.index;
//           }}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={nam}
//           renderItem={({ item }) => {
//             console.log(item.name);
//             return <Image style={styles.textStyle} 
//             source={require(item.name)} />;
//           }}
//         />
//       );
//     };
    
// const styles = StyleSheet.create({
//     textStyle: {
//       height: 500,
//       diplay:"flex",
//       justifyContent:"center",
//       alignIteam:"center",
//     },
//     listStyle: {
//       textAlign: "center",
//       margin: 20,
//       padding: 10,
//     },
//   });

export default Component4;