
import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const Component3 = () => {
  const names = [
    {
      index: "1",
      name: "Mohd",
    },
    {
      index: "2",
      name: "Fuzail",
    },
    {
      index: "3",
      name: "Faizan",
    },
    {
      index: "4",
      name: "Buba",
    },
    {
      index: "5",
      name: "4rotiya",
    },
    {
      index: "6",
      name: "kalmuha_buba",
    },
    {
      index: "7",
      name: "kali_mirich",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "gray",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default Component3;