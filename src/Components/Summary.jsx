import QuizeComplete from "../assets/quiz-complete.png";
import question from "../question";
export default function Summary({ userAnsweres }) {
  const skippedAnswer = userAnsweres.filter((answer, index) => {
    return answer === null;
  });
  const correctAnswer = userAnsweres.filter((answer, index) => {
    return answer === question[index].answers[0];
  });

  const skippedAnswerShare = Math.round((skippedAnswer.length/userAnsweres.length)*100)
  const correctAnswerShare = Math.round((correctAnswer.length/userAnsweres.length)*100)
  const wrongAnswerdShare = Math.round(100 - skippedAnswerShare -correctAnswerShare)



  return (
    <div id="summary">
      <img src={QuizeComplete} />
      <h2>Quiz Completed </h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerdShare}%</span>
          <span className="text">answered InCorrectly</span>
        </p>
      </div>
      <ol>
        {userAnsweres.map((answer, index) => {
          let cssClass = "user-answer ";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === question[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={question[index].id}>
              <h3>{index + 1}</h3>
              <p className="question">{question[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
