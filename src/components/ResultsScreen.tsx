import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultsScreen = ({
  score,
  totalQuestions,
  onRestart,
}: ResultsScreenProps) => {
  const finalPercentage = Math.round((score / totalQuestions) * 100);
  const [percentage, setPercentage] = useState(0);
  const Navigate = useNavigate();
  // Animate bar on mount
  useEffect(() => {
    // small delay ensures transition triggers
    const timeout = setTimeout(() => {
      setPercentage(finalPercentage);
    }, 50);
    return () => clearTimeout(timeout);
  }, [finalPercentage]);

  const getScoreMessage = () => {
    if (finalPercentage >= 90) return "Excellent! 🏆";
    if (finalPercentage >= 70) return "Great job! 🎉";
    if (finalPercentage >= 50) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  const getScoreColor = () => {
    if (finalPercentage >= 70) return "text-green-800"; // use Tailwind default colors
    if (finalPercentage >= 50) return "text-green-800";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border-2 border-gray-300">
        <CardContent className="p-9 pt-7 text-center">
          {/* Icon & Message */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-800 rounded-full flex items-center justify-center">
              <span className="text-3xl text-white">🎯</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Quiz Complete!
            </h1>
            <p className="text-gray-500">{getScoreMessage()}</p>
          </div>

          {/* Percentage & Score */}
          <div className="mb-8">
            <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
              {percentage}%
            </div>
            <p className="text-lg text-gray-500">
              You scored {score} out of {totalQuestions} questions correctly
            </p>
          </div>

          {/* Animated Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full bg-green-800 transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Restart Button */}
          <Button
            onClick={onRestart}
            className="w-full py-3 text-lg bg-green-800 hover:bg-green-600 text-white"
          >
            Take Quiz Again
          </Button>
          <button
            className=" bg-green-800 border-green-800 m-4 hover:bg-green-950 rounded-sm  px-4 py-1 text-white"
            onClick={() => Navigate("/")}
          >
            Home
          </button>
        </CardContent>
      </Card>
    </div>
  );
};
