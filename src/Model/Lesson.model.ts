export class Lesson {
    private id!: number
    private courseID!: number
    private title: string = ''
    private video_url: string = ''
    private content: string = ''
    private orderIndex!: number
    private createAt!: Date
    public get ID(): number {
        return this.id
    }
    public set ID(value: number) {
        this.id = value
    }
    get CourseID(): number {
        return this.courseID;
    }

    set CourseID(courseID: number) {
        this.courseID = courseID;
    }

    // Getter & Setter cho title
    get Title(): string {
        return this.title;
    }

    set Title(title: string) {
        this.title = title;
    }

    // Getter & Setter cho video_url
    get VideoURL(): string {
        return this.video_url;
    }

    set VideoURL(video_url: string) {
        this.video_url = video_url;
    }

    // Getter & Setter cho content
    get Content(): string {
        return this.content;
    }

    set Content(content: string) {
        this.content = content;
    }

    // Getter & Setter cho orderIndex
    get OrderIndex(): number {
        return this.orderIndex;
    }

    set OrderIndex(orderIndex: number) {
        this.orderIndex = orderIndex;
    }

    // Getter & Setter cho createAt
    get CreateAt(): Date {
        return this.createAt;
    }

    set CreateAt(createAt: Date) {
        this.createAt = createAt;
    }
}