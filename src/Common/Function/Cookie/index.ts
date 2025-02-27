export default function getCookie(name: string): any | null {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ').find(cookie => cookie.startsWith(`${name}=`));
    return cookies ? cookies.split('=')[1] : null;
}