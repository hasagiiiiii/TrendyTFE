import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface QuestionItem {
    id: number,
    question_text: string;
    answer: { answer_text: string; id: number }[];
}
interface iniItem {
    questions: QuestionItem[]
}
const initState: iniItem = {
    questions: []
}
export default createSlice({
    name: 'QuestionAdmin',
    initialState: initState,
    reducers: {
        setQuestion(state, action: PayloadAction<QuestionItem[]>) {
            state.questions = action.payload
        },
        updateQuestions(state, action: PayloadAction<QuestionItem>) {
            state.questions = state.questions.map((item) => item.id === action.payload.id ? action.payload : item)
        }

    }
})