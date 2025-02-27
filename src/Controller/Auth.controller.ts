import { User, UserLoginRes, UserRegister } from "../Model/User.model";

import { runQuery } from "../server";
import bcrypt from 'bcrypt'

export const register = async (user: UserRegister): Promise<User> => {
    const { user_name, password, full_name } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (user_name, password,full_name, role)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const res = await runQuery(query, [
        user_name,
        hashedPassword,
        full_name,
        'student'
    ]);
    return res?.rows[0];
};

export const login = async (username: string, password: string): Promise<UserLoginRes | null> => {
    const query = `Select id,user_name,password,full_name,role FROM users WHERE user_name = $1`;
    try {
        const res = await runQuery(query, [username]);
        if (res?.rows.length === 0) {
            return null
        }
        const user = res?.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return null;
        }

        return {
            id: user.id,
            user_name: user.user_name,
            full_name: user.full_name,
            role: user.role
        } as UserLoginRes; // Trả về thông tin user

    } catch (error) {
        console.log(error)
        return null
    }
}

export const getUserByUsername = async (user_name: string) => {
    const query = `
    SELECT * FROM users WHERE user_name = $1;
  `;
    const res = await runQuery(query, [user_name]);

    return res?.rows[0];

};