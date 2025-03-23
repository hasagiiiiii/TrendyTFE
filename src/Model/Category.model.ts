export class Category {
    private id! : number
    private name : string = ''
    constructor() {

    }
    // Getter & Setter cho id
    public get Id(): number {
        return this.id
    }

    public set Id(value: number) {
        this.id = value
    }
    // Getter & Setter cho name
    public get Name(): string {
        return this.name
    }

    public set Name(value: string) {
        this.name = value
    }
}
