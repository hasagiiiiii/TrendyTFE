import { fetchData } from "../../../Hook/useFetch";

export async function fetchMessageFromAPI() {
    const response = await fetchData.get('http://localhost:3001/test');
    // const data = await response.json();
    return response.message;
};