export class Answer {
    private id!: number
    private questionsID!: number
    private answerText : string = ''
    private answerCorrect!: boolean
    constructor() {

    }
    // Getter & Setter cho id
    public get Id(): number {
        return this.id
    }

    public set Id(value: number) {
        this.id = value
    }
    // Getter & Setter cho questionsID
    public get QuestionsID(): number {
        return this.questionsID
    }

    public set QuestionsID(value: number) {
        this.questionsID = value
    }
    // Getter & Setter cho answerText
    public get AnswerText(): string {
        return this.answerText
    }

    public set AnswerText(value: string) {
        this.answerText = value
    }
    // Getter & Setter cho answerCorrect
    public get AnswerCorrect(): boolean {
        return this.answerCorrect
    }

    public set AnswerCorrect(value: boolean) {
        this.answerCorrect = value
    }
}