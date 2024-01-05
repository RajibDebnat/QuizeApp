import QuestionTimer from "./QuestionTimer";
import Answered from "./Answere";
import Questions from '../question.js'
import { useState } from "react";
export default function Question({activeQuestionIndex,onSkipeQuestion,
    // questionText,answers,
    // answerState
    // selectedAnswer
    onSelectAnswer}) {

        // console.log(key)
const [answer,setAnswer] = useState({
    selectedAnswer:"",
    isCorrect : null,
})

let timer = 10000;
 
if (answer.selectedAnswer){
  timer = 1000;
}
if(answer.isCorrect !==null){
  timer = 2000;
}


let answerState = '';
function handleSelectAnswere(answer){
    
    // answerState= "answered"
setAnswer({
    selectedAnswer:answer,
    isCorrect:null
})
setTimeout(()=>{
    setAnswer({
        selectedAnswer:answer,
        isCorrect:Questions[activeQuestionIndex].answers[0] === answer
    })
        setTimeout(()=>{
            onSelectAnswer(answer)
        },2000)
},1000)
}

if(answer.selectedAnswer && answer.isCorrect !==null){
  console.log(answer.isCorrect)
    answerState = answer.isCorrect ?'correct':"wrong";
}else if(answer.selectedAnswer){
    answerState= "answered"
}
  return (
    <div div="question">
      {/* key = whenever the component is recreate or rerender the key element destroy this questionTimer component and recreate  this component againe there for whenever the state is changeing then this key component recreate this questionTimer component again so new timeOut set again . so how this progress bar is refilling by a simple change whenever state change  */}
      {/* it will skipp or rendering fast becasue of my timer was not reset every changes when i use timer as a key of this component it works fine  */}
      <QuestionTimer
        key={timer}
        // this ontimeOut comperison for if anser is notSelected then this function will call otherWise nothing will happen because of null 
        onTimeOut={!answer.selectedAnswer ?onSkipeQuestion:null}
        timeOut={timer}
        mode={answerState}
      />
      {/* key propert\y force react to destroy old code and recreate new one  */}
      <h2>{Questions[activeQuestionIndex].text}</h2>
      <Answered
        key={activeQuestionIndex}
        answeres={Questions[activeQuestionIndex].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelectAnswere}
      />
    </div>
  );
}
