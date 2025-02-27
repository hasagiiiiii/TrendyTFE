import { runQuery } from "../server";

export const SelectCategory = async (): Promise<any> => {
    const query = `
      SELECT * FROM category ORDER BY id ASC;
    `;
    const res = await runQuery(query, [
    ]);
    return res?.rows;
};

export const UpdateCategory = async (name: string, id: number): Promise<any> => {
    const query = `
     Update category SET name = $2 where category.id =$1  RETURNING *;
    `;
    const res = await runQuery(query, [
        id,
        name
    ]);
    return res?.rows[0];
};
