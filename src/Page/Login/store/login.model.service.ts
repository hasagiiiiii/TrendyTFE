import { LoginModel } from "./login.component"

export const LoginService = async (login: LoginModel) => {
    const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            user_name: login.user_name,
            password: login.password
        })
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error))
    return response

}