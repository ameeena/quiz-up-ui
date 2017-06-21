export class Quiz
 {
  _id: string;
  name: string;
  domain: string;
  description: string;
  duration: number;
  questions: QuizQuestion[];
}

export class QuizQuestion {
  _id: string;
  value: string;
  options: string[];
  correctOptionIndex: number;

  constructor() {
    this.options = [];
  }
}

export class AttemptedQuestion {
  question: QuizQuestion;
  answerIndex: number;

  constructor() {
    this.question = new QuizQuestion();
  }
}

export class QuestionFromUser {
  questionName: string;
  correctAnswer: string;
  selectedAnswer: string
}

