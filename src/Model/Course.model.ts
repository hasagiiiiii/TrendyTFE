export class Course {
    id!: number
    title: string = ''
    teacherID!: number
    price!: number
    thumbnail: string = ''
    categoryID!: number
    createAt!: Date
    // Getter & Setter cho id
    get Id(): number {
        return this.id;
    }

    set Id(id: number) {
        this.id = id;
    }

    // Getter & Setter cho title
    get Title(): string {
        return this.title;
    }

    set Title(title: string) {
        this.title = title;
    }

    // Getter & Setter cho teacherID
    get TeacherID(): number {
        return this.teacherID;
    }

    set TeacherID(teacherID: number) {
        this.teacherID = teacherID;
    }

    // Getter & Setter cho price
    get Price(): number {
        return this.price;
    }

    set Price(price: number) {
        this.price = price;
    }

    // Getter & Setter cho thumbnail
    get Thumbnail(): string {
        return this.thumbnail;
    }

    set Thumbnail(thumbnail: string) {
        this.thumbnail = thumbnail;
    }

    // Getter & Setter cho categoryID
    get CategoryID(): number {
        return this.categoryID;
    }

    set CategoryID(categoryID: number) {
        this.categoryID = categoryID;
    }

    // Getter & Setter cho createAt
    get CreateAt(): Date {
        return this.createAt;
    }

    set CreateAt(createAt: Date) {
        this.createAt = createAt;
    }
}