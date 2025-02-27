
import { runQuery } from '../server';


export const getToken = async (id_user: number): Promise<any> => {
    const query = `
        Select * from tokenauthent where id_user = $1
    `
    const res = await runQuery(query, [id_user])
    return res?.rows[0]
}
export const insertToken = async (token: string, id_user: number): Promise<boolean> => {

    const query = `
      INSERT INTO tokenauthent (token,id_user)
      VALUES ($1,$2) RETURNING *;
    `;
    const res = await runQuery(query, [
        token,
        id_user
    ]);
    if (res) {
        return true
    } else {
        return false
    }
};
export const updateToken = async (token: string, id_user: number): Promise<boolean> => {

    const query = `
      UPDATE TokenAuthent SET token = $1, created_at = CURRENT_TIMESTAMP WHERE id_user = $2;
    `;
    const res = await runQuery(query, [
        token,
        id_user
    ]);
    if (res) {
        return true
    } else {
        return false
    }
};