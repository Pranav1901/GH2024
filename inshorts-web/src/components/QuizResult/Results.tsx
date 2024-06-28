import { Typography, Card, CardContent } from '@mui/material'

interface ResultProp {
    correctAnswers: number,
    numberOfQuestions: number
}
export default function Result(props: ResultProp) {
    return (
        <Card variant='outlined' sx={{ pt: 0, pb: 0 }}>
            <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 1 }} variant="h4" color="text.secondary">
                    Result
                </Typography>
                <Typography sx={{ display: "flex", justifyContent: "center", mb: 1 }} variant="h4" color="text.secondary">
                    {props.correctAnswers} / {props.numberOfQuestions}
                </Typography>
            </CardContent>
        </Card>
    )
}
