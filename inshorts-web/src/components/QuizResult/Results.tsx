import React, { useMemo } from 'react'
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import questions from '../../data/questions';


export default function Result(props: any) {
    const { answers } = props;

    const correctAnswers = useMemo(() => {
        return questions.filter((q, i) => {
            return q.correctAnswer === parseInt(answers[i]);
        }).length;
    }, [answers])

    return (
        <Card variant='outlined' sx={{ pt: 0, pb: 0 }}>
            <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 1 }} variant="h4" color="text.secondary">
                    Result
                </Typography>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 1 }} variant="h4" color="text.secondary">
                    {correctAnswers} / {questions.length}
                </Typography>
            </CardContent>
        </Card>
    )
}
