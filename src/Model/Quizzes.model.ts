export class Quizzes {
    private id!: number;
    private title: string = ''
    private coursesID!: number;
    private typeEnrollment!: number;
    private lessonID!: number;
    private description: string = ''
    private createAt!: Date 
    constructor() {

    }

    // Getter & Setter cho id
    public getID(): number {
        return this.id;
    }
    public setID(id: number) {
        this.id = id;
    }
    // Getter & Setter cho title
    public getTitle(): string {
        return this.title;
            }
    public setTitle(title: string){
        this.title = title;
    }
    // Getter & Setter cho coursesID
    public getCoursesID(): number {
        return this.coursesID;
    }
    public setCoursesID(coursesID: number){
        this.coursesID = coursesID; 
    }   
    // Getter & Setter cho typeEnrollment
    public getTypeEnrollment(): number {
        return this.typeEnrollment;
    }
    public setTypeEnrollment(typeEnrollment: number){
        this.typeEnrollment = typeEnrollment; 
    }
    // Getter & Setter cho lessonID
    public getLessonID(): number {
        return this.lessonID;
    }
    public setLessonID(lessonID: number){
        this.lessonID = lessonID; 
    }
    // Getter & Setter cho description
    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string){
        this.description = description;
    }
    // Getter & Setter cho createAt
    public getCreateAt(): Date {
        return this.createAt;
    }
    public setCreateAt(createAt: Date){
        this.createAt = createAt;
    }
}