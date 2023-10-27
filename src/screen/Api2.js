import React, { useEffect, useState } from 'react';
import {Text, View,FlatList,Image,StyleSheet} from 'react-native';

const Api2 = () => {
    const [myUserData,setMyUserData]=useState();
    const [myloading,setMyLoading]=useState(true);
    const getUserData = async()=>{
        try{
            const response =await fetch("https://dummyjson.com/products");
            const myData= await response.json();
            setMyUserData(myData.products);
            setMyLoading(false);
            // console.log(myData.products);
        }catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getUserData();
    },[]);
  return (
    <View style={styles.container1}>
        <Text
       style={styles.title5}
        >MF Cart</Text>
        <FlatList
        data={myUserData}
        renderItem={({item})=>{
            // console.log(item.thumbnail);
            return (
                <View style={styles.container}>
           <Text
           style={styles.title1}
           >{item.category}</Text>
            <Image
            style={styles.i}
            source={{uri:item.thumbnail}}
            />
            <View style={styles.container2}>
            <Text style={styles.title2}>{item.brand}</Text>
            <Text style={styles.title4}>{item.description}</Text>
            </View>
            </View>
            );
        }}
        
 
  />
   </View>
  );
};
const styles = StyleSheet.create({
    
    container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       width:360,
       
        backgroundColor: '#CACFD2',
        // marginVertical: 50,
        
      },
  container1: {
    
    display:"flex",
      justifyContent:"center",
      alignItems:"center",
    
    backgroundColor: '#CACFD2',
    // paddingVertical: 20,
    
  },
  container2: {
    flex: 1,
    padding: 15,
   width:360,
    backgroundColor: '#CACFD2',
    borderWidth: 2,
    borderColor: '#797D7F',
    // marginVertical: 50,
    
  },
  title1: {
    color: '#FDFEFE',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',

  }, title2: {
    color: '#20232a',
    fontSize: 30,
 },
  title3: {
    color:'#20232a',
    
    fontSize: 40,
    fontWeight: 'bold',

  },
  title4: {
    color: '#909497',
    fontSize: 15,},
    title5: {
        color: 'black',
        fontSize: 35,
        marginVertical: 15,
        fontWeight: 'bold',
    },
    i:{
      width:360,
    height:200,      }
  });

export default Api2;