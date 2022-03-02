import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { decode } from "html-entities";

const Options = ({
  questions,
  quesIndex,
  validateAnswer,
  isOptionDisabled,
  currentOptionSelected,
  correctOption,
}) => {
  return (
    <View>
      {questions[quesIndex]?.options.map((option) => (
        <TouchableOpacity
          onPress={() => validateAnswer(option)}
          disabled={isOptionDisabled}
          key={option}
          style={{
            borderWidth: 3,
            borderColor:
              option === correctOption
                ? "#00C851"
                : option === currentOptionSelected
                ? "#ff4444"
                : "white",
            backgroundColor: "white",
            marginVertical: 15,
            borderRadius: 10,
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
              color:
                option === correctOption
                  ? "#00C851"
                  : option === currentOptionSelected
                  ? "#ff4444"
                  : "#4FACF7",
              fontFamily: "Ubuntu_700Bold",
            }}
          >
            {decode(option)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Options;
