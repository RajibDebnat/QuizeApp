import { useCallback, useRef, useState } from "react";
import question from "../question";

import QuestionTimer from "./QuestionTimer";
import Answered from "../Components/Answere.jsx";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quize() {
  // i gonna have an array of question and i have to handle them with which question is selected and which answeres got selected
  // for getting index

  // const [answerState, setAnswerState] = useState("");
  const [userAnsweres, setUserAnsweres] = useState([]);

  const activeQuestionIndex = userAnsweres.length;
  const quizCompleted = activeQuestionIndex === question.length;
  console.log(activeQuestionIndex);
  // console.log(answerState);

  // what callBack hook does it help us to not create newFunction or not change the function whenever the surounding changed
  const handleSelectAnswere = useCallback(
    function handleSelectAnswere(selectedAnswere) {
      // setAnswerState("answered");
      setUserAnsweres((prevValue) => [...prevValue, selectedAnswere]);

      // setTimeout(() => {
      //   if (selectedAnswere === question[activeQuestionIndex].answers[0]) {
      //     setAnswerState("correct");
      //   } else {
      //     setAnswerState("wrong");
      //   }
      //   setTimeout(() => {
      //     setAnswerState("");
      //     console.log("Empty");
      //   }, 2000);
      // }, 1000);
    },
    []
  );
  const handleQuestionSkipper = useCallback(
    () => handleSelectAnswere(null),
    [handleSelectAnswere]
  );

  if (quizCompleted) {
    return <Summary userAnsweres = {userAnsweres}/> 
      
 
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        // answerState={answerState}
        onSkipeQuestion={handleQuestionSkipper}
        // questionText={question[activeQuestionIndex].text}
        // selectedAnswer={userAnsweres[userAnsweres.length - 1]}
        // answers={question[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswere}
      />
    </div>
  );
}
