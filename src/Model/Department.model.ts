export class Department {
    private deptcd: string = ''
    private nameDept: string = ''
    private description: string = ''
    public get DeptCD(): string {
        return this.deptcd
    }

    public set DeptCD(value: string) {
        this.deptcd = value
    }

    public get DeptName(): string {
        return this.nameDept
    }

    public set DeptName(value: string) {
        this.nameDept = value
    }
    public get Description(): string {
        return this.description
    }

    setDepartment(data: any) {
        this.deptcd = data.deptcd
        this.nameDept = data.nameDept
        this.description = data.description
    }
}