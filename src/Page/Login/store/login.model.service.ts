import { LoginModel } from "./login.component"

export const LoginService = async (login: LoginModel) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            userName: login.userName,
            password: login.password
        })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error))
    return response

}