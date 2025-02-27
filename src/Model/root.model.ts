export interface BaseI {
    result: number,
    message: string,
    data: any
}

export interface Result {
    RESULT_SUCCESS: 0,
    RESULT_ERROR: 1,
    ReSULT_Falure: 2
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