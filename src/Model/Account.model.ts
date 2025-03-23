export class Account {
    private user_name: string = ''
    private avatar: string = ''
    private address: string = ''
    private fullName: string = ''
    private role: string = ''
    constructor() {

    }
    public get Username(): string {
        return this.user_name
    }

    public set Username(value: string) {
        this.user_name = value
    }
    public get Avatar(): string {
        return this.avatar
    }

    public set Avatar(value: string) {
        this.avatar = value
    }
    public get Address(): string {
        return this.address
    }

    public set Address(value: string) {
        this.address = value
    }
    public get FullName(): string {
        return this.fullName
    }

    public set FullName(value: string) {
        this.fullName = value
    }

    public get Role(): string {
        return this.role
    }

    public set Role(value: string) {
        this.role = value
    }
}