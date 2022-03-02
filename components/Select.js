import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import {
  useFonts,
  ConcertOne_400Regular,
} from "@expo-google-fonts/concert-one";
import AppLoading from "expo-app-loading";

const Select = ({ categories, setData, data }) => {
  const [selected, setSelected] = useState("easy");

  useEffect(() => {
    setData(selected);
  }, [selected]);

  const [fontsLoaded, err] = useFonts({
    ConcertOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Picker
      style={styles.picker}
      selectedValue={selected}
      mode="dropdown"
      dropdownIconColor="white"
      onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
    >
      {categories.map((category) => (
        <Picker.Item
          key={category.type}
          label={category.label}
          value={category.type}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: "white",
    width: "60%",
    fontFamily: "ConcertOne_400Regular",
  },
});

export default Select;
