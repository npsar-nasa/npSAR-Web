import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizCard } from "@/components/QuizCard";
import { ResultsScreen } from "@/components/ResultsScreen";
import { quizQuestions } from "@/data/quizData";
import { useNavigate } from "react-router-dom";

type QuizState = "welcome" | "quiz" | "results";

const Indexx = () => {
  const Navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStartQuiz = () => {
    setQuizState("quiz");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    // Check if answer is correct
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizState("results");
    }
  };

  const handleRestart = () => {
    setQuizState("welcome");
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
  };

  if (quizState === "welcome") {
    return <WelcomeScreen onStart={handleStartQuiz} />;
  }

  if (quizState === "results") {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div>
      <button
        className=" bg-green-800 m-4 border-green-800 hover:bg-green-950 rounded-sm px-4 py-1 text-white"
        onClick={() => Navigate("/")}
      >
        Home
      </button>
      <div className="min-h-[90vh] bg-quiz-bg flex items-center justify-center p-4">
        <QuizCard
          question={quizQuestions[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizQuestions.length}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNextQuestion}
          showNext={selectedAnswer !== null}
        />
      </div>
    </div>
  );
};

export default Indexx;
