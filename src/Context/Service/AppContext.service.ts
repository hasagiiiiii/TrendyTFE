export const LogoutService = async () => {
    const response = await fetch('http://localhost:3001/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
    return response

}