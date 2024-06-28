import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { QNA } from "../../utils/types";

interface QuestionCardProps {
  questionSet: QNA,
  handleOptionSelection: (questionId: number, value: number) => void 
}

export default function QuestionCard(props: QuestionCardProps) {
  const { questionSet, handleOptionSelection } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOptionSelection(questionSet.questionNumber, Number((event.target as HTMLInputElement).value));
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Question {questionSet.questionNumber}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {questionSet.question}
          </Typography>

          <FormControl>
            <RadioGroup
              name="radio-group-quiz"
              onChange={handleChange}
            >
              {questionSet.options.map((o, index, arr) => {
                return (
                  <FormControlLabel
                    key={o.key}
                    value={o.key}
                    control={<Radio />}
                    label={o.value}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
