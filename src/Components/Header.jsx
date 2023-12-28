import QuizeLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={QuizeLogo} alt={QuizeLogo}/>
      <h1>ReactQuize</h1>
    </header>
  );
}
