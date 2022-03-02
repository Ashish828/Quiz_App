import axios from "axios";
import { decode } from "html-entities";

// this function is used to randomize the options
import { randomArrayShuffle } from "../hooks/randomizeArray";

export const callAPI = async (
  id,
  difficulty,
  navigation,
  questions,
  setQuestions
) => {
  // const entities = new Html5Entities();
  try {
    setQuestions([]);
    navigation.navigate("QUIZ");
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=3&category=${id}&difficulty=${difficulty}&type=multiple`
    );

    const res = response.data.results.map((d) => ({
      category: d.category,
      question: decode(d.question),
      options: randomArrayShuffle([...d.incorrect_answers, d.correct_answer]),
      correct_answer: d.correct_answer,
    }));
    setQuestions(res);
  } catch (e) {
    console.log("error");
  }
};
