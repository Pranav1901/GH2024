export interface QNA {
    questionNumber: number,
    question: string,
    options: Options[],
    correctAnswer: number
  }
  
  export interface QuestionProps {
    questions: QNA[]
  }

  export interface Answer {
    questionId: number,
    selectedOption: number
  }

  export interface Options {
    key: number,
    value: string
  }