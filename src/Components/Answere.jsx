import { useRef } from "react";
export default function Answered({
  answeres,
  answerState,
  selectedAnswer,
  onSelect,
  id,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answeres];
    //  console.log(shuffledAnswers.current)
    shuffledAnswers.current.sort(() => {
      return Math.random() - 0.5;
    });
  }
  return <ul id="answers">
    {/* console.log(shuffledAnswers) */}

    {shuffledAnswers.current.map((answer, index) => {
      console.log(answer);
      const isSelected = selectedAnswer === answer;

      let cssClass = " ";

      if (answerState === "answered" && isSelected) {
        cssClass = "selected";
        console.log(cssClass);
      }
      if (
        (answerState === "correct" || answerState === "wrong") &&
        isSelected
      ) {
        cssClass = answerState;
        console.log(cssClass);
      }
console.log(answerState)
      return (
        <li key={index} className="answer">
          <button
            onClick={() => {
              onSelect(answer);
            }}
            className={cssClass}
            disabled={answerState !==""}
          >
            {answer}
          </button>
        </li>
      );
    })}
  </ul>;
}
