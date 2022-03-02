import React from "react";
import { View, Text } from "react-native";

const Questions = ({ quesIndex, totalQues, questions }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {/* current question counter */}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", fontSize: 20, marginRight: 2 }}>
          {quesIndex + 1}
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>/ {totalQues}</Text>
      </View>
      {/* question */}
      <Text
        style={{
          color: "white",
          fontSize: 36,
          marginTop: 10,
          lineHeight: 50,
          fontFamily: "Ubuntu_500Medium",
        }}
      >
        {questions[quesIndex]?.question}
      </Text>
    </View>
  );
};

export default Questions;
