import React, { useContext, useState } from "react";
import { View, StatusBar, StyleSheet, Animated } from "react-native";
// data from context
import { QuizContext } from "../context/QuizContext";
// fonts
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import { ConcertOne_400Regular } from "@expo-google-fonts/concert-one";

// components
import ModalComp from "../components/ModalComp";
import Questions from "../components/Questions";
import Options from "../components/Options";
import Button from "../components/Button";
import Loading from "../components/Loading";

const QuizScreen = ({ navigation }) => {
  const [questions, setQuestions] = useContext(QuizContext);
  const [state, setState] = useState({
    currentQuestionIndex: 0,
    currentOptionSelected: null,
    correctOption: null,
    isOptionDisabled: false,
    score: 0,
    showNextButton: false,
    showScoreModal: false,
    progress: new Animated.Value(0),
  });

  const [fontsLoaded, err] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    ConcertOne_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  // function to validate options
  const validateAnswer = (selectedOption) => {
    const correct_answer =
      questions[state.currentQuestionIndex]?.correct_answer;
    setState((state) => ({
      ...state,
      correctOption: correct_answer,
      currentOptionSelected: selectedOption,
    }));

    if (selectedOption === correct_answer) {
      setState((state) => ({ ...state, score: state.score + 1 }));
    }
    setState((state) => ({
      ...state,
      isOptionDisabled: true,
      showNextButton: true,
    }));
  };

  // function to handle a next button
  const handleNext = () => {
    if (state.currentQuestionIndex === questions.length - 1) {
      // show score

      setState((state) => ({ ...state, showScoreModal: true }));
    } else {
      setState((state) => ({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentOptionSelected: null,
        correctOption: null,
        isOptionDisabled: false,
        showNextButton: false,
      }));
    }

    Animated.timing(state.progress, {
      toValue: state.currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // function to render progress bar
  const progressAnim = state.progress.interpolate({
    inputRange: [0, questions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          marginVertical: 20,
          height: 30,
          borderRadius: 20,
          backgroundColor: "white",
        }}
      >
        <Animated.View
          style={[
            {
              height: 30,
              borderRadius: 20,
              backgroundColor: "#ee609c",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={"#4FACF7"} />
      {questions && questions.length > 0 ? (
        <View style={styles.quizContainer}>
          {/* progress bar */}
          {renderProgressBar()}

          {/* question */}
          <Questions
            quesIndex={state.currentQuestionIndex}
            totalQues={questions.length}
            questions={questions}
          />

          {/* option */}
          <Options
            questions={questions}
            quesIndex={state.currentQuestionIndex}
            validateAnswer={validateAnswer}
            isOptionDisabled={state.isOptionDisabled}
            correctOption={state.correctOption}
            currentOptionSelected={state.currentOptionSelected}
          />

          {/* next button */}
          {state.showNextButton ? <Button handleNext={handleNext} /> : null}

          {/* score modal */}
          <ModalComp
            showScoreModal={state.showScoreModal}
            quizContainer={styles.quizContainer}
            score={state.score}
            totalQues={questions.length}
            navigation={navigation}
          />
        </View>
      ) : (
        <Loading />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "#4FACF7",
    padding: 20,
  },
});

export default QuizScreen;
