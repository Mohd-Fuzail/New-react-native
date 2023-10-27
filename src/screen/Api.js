import React, { useEffect, useState } from 'react';
import {Text, View,FlatList} from 'react-native';

const Api = () => {
    const [myUserData,setMyUserData]=useState();
    const [myloading,setMyLoading]=useState(true);
    const getUserData = async()=>{
        try{
            const response =await fetch("https://dummyjson.com/quotes");
            const myData= await response.json();
            setMyUserData(myData.quotes);
            setMyLoading(false);
            // console.log(myData.quotes);
        }catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getUserData();
    },[]);
  return (
    <View>
        <FlatList
        data={myUserData}
        renderItem={({item})=>{
            // console.log(item);
            return (
                <View>
            <Text>{item.id}</Text>
            <Text>{item.author}</Text>
            <Text>{item.quote}</Text>
            </View>
            );
        }}
        
 
  />
   </View>
  );
};

export default Api;