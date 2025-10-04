import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const Navigate = useNavigate();
  return (
    <div className="">
      <button
        className=" bg-green-800 border-green-800 m-4 hover:bg-green-950 rounded-sm  px-4 py-1 text-white"
        onClick={() => Navigate("/")}
      >
        Home
      </button>

      <div className="min-h-[90vh] bg-quiz-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-md mx-auto shadow-xl border-2 border-border">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🧠</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Quiz Challenge
              </h1>
              <p className="text-muted-foreground">
                Test your knowledge with 10 exciting questions
              </p>
            </div>

            <div className="mb-8 space-y-2 text-sm text-muted-foreground">
              <p>• 10 multiple choice questions</p>
              <p>• No time limit</p>
              <p>• See your score at the end</p>
            </div>

            <Button
              onClick={onStart}
              className="w-full py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
