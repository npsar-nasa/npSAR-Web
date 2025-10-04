export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question:
      "Which glacier lake in Chile’s Patagonia region was formed by retreating glaciers?",
    options: [
      "Lake O'Higgins",
      "Lake Grey",
      "Lake General Carrera",
      "Lake Pehoé",
    ],
    correctAnswer: 1, // Lake Grey
  },
  {
    id: 2,
    question: "Which glacier lake is the largest in Nepal?",
    options: ["Tsho Rolpa", "Imja Tsho", "Gokyo Tsho", "Chamlang Tsho"],
    correctAnswer: 2, // Gokyo Tsho
  },
  {
    id: 3,
    question:
      "Which glacier-fed lake in Switzerland is famous for its turquoise water?",
    options: ["Oeschinen Lake", "Blausee", "Lake Geneva", "Lake Lucerne"],
    correctAnswer: 0, // Oeschinen Lake
  },
  {
    id: 4,
    question: "Imja Tsho is located near which major mountain in Nepal?",
    options: ["Makalu", "Everest", "Manaslu", "Annapurna"],
    correctAnswer: 1, // Everest
  },
  {
    id: 5,
    question: "Which glacier lake in Bhutan caused a major GLOF in 1994?",
    options: [
      "Thorthormi Lake",
      "Luggye Tsho",
      "Raphstreng Tsho",
      "Gangkar Tsho",
    ],
    correctAnswer: 1, // Luggye Tsho
  },
  {
    id: 6,
    question: "Which glacier lake in Nepal poses a significant GLOF risk?",
    options: ["Gokyo Tsho", "Tsho Rolpa", "Imja Tsho", "Chamlang Tsho"],
    correctAnswer: 1, // Tsho Rolpa
  },
  {
    id: 7,
    question:
      "Which glacier lake in Tibet is considered sacred and one of the largest in the region?",
    options: [
      "Namtso Lake",
      "Manasarovar Lake",
      "Yamdrok Lake",
      "Puma Yumco Lake",
    ],
    correctAnswer: 2, // Yamdrok Lake
  },
  {
    id: 8,
    question:
      "Which glacier lake in New Zealand lies at the base of Aoraki/Mount Cook?",
    options: ["Hooker Lake", "Tasman Lake", "Mueller Lake", "Pukaki Lake"],
    correctAnswer: 1, // Tasman Lake
  },
  {
    id: 9,
    question: "Which is the largest glacier lake in the Himalayas of India?",
    options: ["Gurudongmar Lake", "Changu Lake", "Pangong Tso", "Chandra Taal"],
    correctAnswer: 2, // Pangong Tso
  },
  {
    id: 10,
    question:
      "Which glacier lake in Alaska formed rapidly due to melting of the Mendenhall Glacier?",
    options: ["Crater Lake", "Suicide Basin", "Bear Glacier Lake", "Taku Lake"],
    correctAnswer: 1, // Suicide Basin
  },
];
