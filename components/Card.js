import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  useFonts,
  ConcertOne_400Regular,
} from "@expo-google-fonts/concert-one";
import AppLoading from "expo-app-loading";
import Select from "./Select";
import { Entypo } from "@expo/vector-icons";
import { callAPI } from "../api/getQuestions";
import { QuizContext } from "../context/QuizContext";

const Card = ({
  navigation,
  id,
  title,
  bg_color = ["#4158D0", "#C850C0", "#FFCC70"],
  svg: Logo,
  category,
  height,
  right: cRight,
  top: cTop,
}) => {
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useContext(QuizContext);

  const [fontsLoaded, err] = useFonts({
    ConcertOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={bg_color}
      start={[0, 0]}
      end={[1, 1]}
      location={[0.25, 0.4, 1]}
    >
      <View key={id}>
        <Logo
          height={height}
          width={height}
          style={{
            position: "absolute",
            right: cRight,
            top: cTop,
          }}
        />
        <Text style={styles.categoryName}>{title}</Text>

        <Select
          categories={category}
          setData={setDifficulty}
          data={difficulty}
        />
      </View>

      <View style={styles.playContainer}>
        <TouchableOpacity
          onPress={() =>
            callAPI(id, difficulty, navigation, questions, setQuestions)
          }
        >
          <Entypo
            style={{ marginStart: 10, fontSize: 40 }}
            name="controller-play"
            color="#ee609c"
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// styles for card
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "80%",
    height: 150,
    marginTop: 20,
    marginBottom: 40,
    marginStart: "10%",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
    borderRadius: 20,
    elevation: 8,
    backgroundColor: "#0000",
    paddingLeft: 10,
  },
  categoryName: {
    fontFamily: "ConcertOne_400Regular",
    fontSize: 40,
    color: "white",
    paddingTop: 25,
    letterSpacing: 1,
  },
  playContainer: {
    width: "17%",
    height: "35%",
    position: "absolute",
    left: "45%",
    bottom: "-15%",
    backgroundColor: "white",
    borderRadius: 150,
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
    elevation: 8,
  },
});

export default Card;
