import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import Score_Boy from "../assets/categories-icons/score_boy.svg";

const ModalComp = ({
  showScoreModal,
  quizContainer,
  score,
  totalQues,
  navigation,
}) => {
  return (
    <Modal animationTypre="slide" transpaarent={true} visible={showScoreModal}>
      <View style={quizContainer}>
        <Text
          style={{
            textAlign: "center",
            marginTop: "30%",
            color: "white",
            fontFamily: "ConcertOne_400Regular",
            fontSize: 90,
          }}
        >
          {score >= totalQues / 2 ? "Congrats!" : "Oops!Next Time"}
        </Text>
        <View>
          <Text
            style={{
              textAlign: "center",
              marginTop: "10%",
              color: "white",
              fontFamily: "ConcertOne_400Regular",
              fontSize: 40,
            }}
          >
            Your Score
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Ubuntu_700Bold",
                fontSize: 100,
              }}
            >
              {score}
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Ubuntu_700Bold",
                fontSize: 50,
              }}
            >
              / {totalQues}
            </Text>
          </View>
        </View>
        <Score_Boy
          height={300}
          width={300}
          style={{ position: "absolute", bottom: 30, left: -60 }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#ee609c",
            position: "absolute",
            borderRadius: 9,
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "#000",
            shadowOpacity: 1,
            elevation: 18,
            bottom: 160,
            right: 30,
            width: 200,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingVertical: 10,
              fontSize: 25,
              fontSize: 35,
              fontFamily: "ConcertOne_400Regular",
              color: "white",
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalComp;
