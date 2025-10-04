export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Which glacier lake is known as the largest in Nepal?",
    options: ["Chamlang Tsho", "Gokyo Tsho", "Imja Tsho", "Tsho Rolpa"],
    correctAnswer: 1, // Gokyo Tsho
  },
  {
    id: 2,
    question: "Which glacier lake was formed most recently?",
    options: ["Imja Tsho", "Gokyo Tsho", "Tsho Rolpa", "Chamlang Tsho"],
    correctAnswer: 0, // Imja Tsho
  },
  {
    id: 3,
    question: "Which glacier lake is located at the highest altitude?",
    options: ["Tsho Rolpa", "Gokyo Tsho", "Imja Tsho", "Chamlang Tsho"],
    correctAnswer: 1, // Gokyo Tsho
  },
  {
    id: 4,
    question: "Which glacier lake is known for its rapid expansion?",
    options: ["Imja Tsho", "Chamlang Tsho", "Gokyo Tsho", "Tsho Rolpa"],
    correctAnswer: 0, // Imja Tsho
  },
  {
    id: 5,
    question:
      "Which glacier lake is considered the largest in the Rolwaling Valley?",
    options: ["Tsho Rolpa", "Gokyo Tsho", "Imja Tsho", "Chamlang Tsho"],
    correctAnswer: 0, // Tsho Rolpa
  },
  {
    id: 6,
    question: "Gokyo Tsho Glacier Lake is located in which mountain range?",
    options: ["Karakoram", "Himalayas", "Alps", "Andes"],
    correctAnswer: 1, // Himalayas
  },
  {
    id: 7,
    question: "Imja Tsho was first noticed to appear in which decade?",
    options: ["1960s", "1970s", "1980s", "1990s"],
    correctAnswer: 2, // 1980s
  },
  {
    id: 8,
    question:
      "Which glacier lake is a major concern for glacial lake outburst floods (GLOFs)?",
    options: ["Tsho Rolpa", "Chamlang Tsho", "Gokyo Tsho", "Imja Tsho"],
    correctAnswer: 3, // Imja Tsho
  },
  {
    id: 9,
    question:
      "Which glacier lake is famous for its turquoise color due to glacial silt?",
    options: ["Gokyo Tsho", "Tsho Rolpa", "Chamlang Tsho", "Imja Tsho"],
    correctAnswer: 0, // Gokyo Tsho
  },
  {
    id: 10,
    question: "Chamlang Tsho Glacier Lake is located in which region of Nepal?",
    options: ["Solukhumbu", "Langtang", "Rasuwa", "Mustang"],
    correctAnswer: 0, // Solukhumbu
  },
];
