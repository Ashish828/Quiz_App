import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Button = ({ handleNext }) => {
  return (
    <TouchableOpacity
      onPress={() => handleNext()}
      style={{
        marginTop: "15%",
        backgroundColor: "#0066FF",
        borderRadius: 9,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 18,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          paddingVertical: 15,
          fontSize: 25,
          fontSize: 25,
          fontFamily: "Ubuntu_700Bold",
          color: "white",
        }}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
