import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/quizData";

interface QuizCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  showNext: boolean;
}

export const QuizCard = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  showNext,
}: QuizCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-2 border-border">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <div className="w-32 bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    ((currentQuestion - 1) / totalQuestions) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {question.question}
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:bg-quiz-card-hover ${
                selectedAnswer === index
                  ? "border-primary bg-accent text-accent-foreground"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <span className="font-medium">
                {String.fromCharCode(65 + index)}.
              </span>{" "}
              {option}
            </button>
          ))}
        </div>

        {showNext && (
          <div className="flex justify-end">
            <Button
              onClick={onNext}
              className="px-8 py-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {currentQuestion === totalQuestions
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
