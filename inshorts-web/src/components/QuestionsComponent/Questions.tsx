import { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { QNA, QuestionProps, Answer } from "../../utils/types";
import Results from "../QuizResult/Results";
import { Button } from "@mui/material";

function Questions(props: QuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const submit = () => {
    const correctAnswers = props.questions.filter((q, i) => {
      return q.correctAnswer == (selectedAnswers[i]);
    }).length;
    setCorrectAnswers(correctAnswers);
    // Update the isSubmitted Status
    setIsSubmitted(true);
  }

  const handleOptionSelection = (questionId: number, value: number) => {
    console.log(`Question : ${questionId} and answer : ${value}`);
    const index = questionId-1;
    if(typeof selectedAnswers[index] === 'undefined') {
      selectedAnswers.splice(index, 0, value);
    } else {
      selectedAnswers.splice(index, 1, value);
    }
  }


  const renderContent = props.questions.map((q: QNA) => {
    return <QuestionCard key={q.questionNumber} questionSet={q} handleOptionSelection={(questionId: number, value: number) => handleOptionSelection(questionId, value)} />;
  });


  return (
    isSubmitted ? <Results correctAnswers={correctAnswers} numberOfQuestions={props.questions.length} /> : <div>{renderContent}<><Button variant="outlined" onClick={() => {
      submit();
    }}>Submit</Button></></div>
  )

}

export default Questions;
