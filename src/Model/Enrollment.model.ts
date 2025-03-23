export class Enrollment {
    private id! : number
    private accountID! : number
    private coursesID! : number
    private enrollAt!: Date
    constructor() {
    }
    // Getter & Setter cho id
    public get Id(): number {
        return this.id;
    }

    public set Id(value: number) {
        this.id = value;
    }
    // Getter & Setter cho accountID
    public get AccountID(): number {
        return this.accountID;
    }

    public set AccountID(value: number) {
        this.accountID = value;
    }
    // Getter & Setter cho coursesID
    public get CoursesID(): number {
        return this.coursesID;
    }

    public set CoursesID(value: number) {
        this.coursesID = value;
    }
    // Getter & Setter cho enrollAt
    public get EnrollAt(): Date {
        return this.enrollAt;
    }

    public set EnrollAt(value: Date) {
        this.enrollAt = value;
    }
}
