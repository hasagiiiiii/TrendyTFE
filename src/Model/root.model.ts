export interface BaseI {
    result: number,
    message: string,
    data: any
}

export enum Result {
    RESULT_SUCCESS,
    RESULT_ERROR,
    RESULT_FALURE = -1,
    RESULT_AUTH = -2

}

export interface AppContextProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>; // Hàm để cập nhật `activeModalLogin`,
    spin: boolean,
    setSpin: React.Dispatch<React.SetStateAction<boolean>>
    Logout: any,
    activeAddUserModal: boolean,
    setAActiveAddUserModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface BreadCumpItem {
    title: string | React.ReactNode;
}

export interface AcountModel {
    id: number,
    full_name: string,
    user_name: string,
    password: string,
    role: string,
    avartar: string,
    create_at: string
}

export const OPTION_ROLE = [{
    value: 'student', lable: 'Student',
},
{
    value: 'teacher', lable: 'Teacher',
},
{
    value: 'admin', lable: 'Admin',
}]