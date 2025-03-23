export class AccountAnswer {
    private id!: number
    private accountID!: number
    private quizzesID!: number
    private answerID!: number
    private score!: number
    private completedAt!: Date
    constructor() {

    }
    // Getter & Setter cho id
    public get Id(): number {
        return this.id
    }

    public set Id(value: number) {
        this.id = value
    }
    // Getter & Setter cho accountID
    public get AccountID(): number {
        return this.accountID
    }

    public set AccountID(value: number) {
        this.accountID = value
    }
    // Getter & Setter cho quizzes
    public get QuizzesID(): number {
        return this.quizzesID
    }
    public set QuizzesID(value: number) {
        this.quizzesID = value
    }
    // Getter & Setter cho answerID
    public get AnswerID(): number {
        return this.answerID
    }
    public set AnswerID(value: number) {
        this.answerID = value
    }
    // Getter & Setter cho score
    public get Score(): number {
        return this.score
    }
    public set Score(value: number) {
        this.score = value
    }
    // Getter & Setter cho completedAt
    public get CompletedAt(): Date {
        return this.completedAt
    }
    public set CompletedAt(value: Date) {
        this.completedAt = value
    }
}