import { RootState } from "../../../Store/store";

export const getQuestions = (state: RootState) => state.questionAdmin.questions
