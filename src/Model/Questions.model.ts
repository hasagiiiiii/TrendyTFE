export class Questions {
    private id! : number
    private quizzesID! : number
    private title : string = ''
    private question_type : string = ''
    constructor() {

    }
    
    // Getter & Setter cho id
    public get Id(): number {
        return this.id
    }

    public set Id(value: number) {
        this.id = value
    }
    // Getter & Setter cho quizzesID
    public get QuizzesID(): number {
        return this.quizzesID
    }

    public set QuizzesID(value: number) {
        this.quizzesID = value
    }
    // Getter & Setter cho title
    public get Title(): string {
        return this.title
    }

    public set Title(value: string) {
        this.title = value
    }
    // Getter & Setter cho question_type
    public get Question_type(): string {
        return this.question_type
    }

    public set Question_type(value: string) {
        this.question_type = value
    }
}