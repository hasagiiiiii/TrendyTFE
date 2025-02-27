import express, { Request, Response } from "express";
import { SelectCategory } from "../Controller/Category.controller";

export const Category = express.Router();

Category.get('/category', async (req: Request, res: Response): Promise<any> => {

    const categories: { id: number, name: string }[] = await SelectCategory()
    const data = categories.map((item) => {
        return {
            value: item.id,
            label: item.name,
        }
    })
    if (categories) {
        return res.status(200).json({ mesage: 'Thành công', result: 0, data: data })
    } else {
        return res.status(400).json({
            mesage: 'Thất bại', result: 1
        })
    }
})