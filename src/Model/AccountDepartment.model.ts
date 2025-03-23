export class AccountDepartment {
    private id! : number
    private accountID! : number
    private deptcd : string = ''
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
    // Getter & Setter cho deptcd
    public get Deptcd(): string {
        return this.deptcd
    }

    public set Deptcd(value: string) {
        this.deptcd = value
    }

}