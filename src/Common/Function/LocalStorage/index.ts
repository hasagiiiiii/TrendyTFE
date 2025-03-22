export function getLocalStorage(key: string) {
    // Kiểm tra nếu key tồn tại trong localStorage
    const data = localStorage.getItem(key);
    // Nếu tồn tại, parse dữ liệu từ JSON và trả về, nếu không trả về null
    return data ? JSON.parse(data) : null;
}