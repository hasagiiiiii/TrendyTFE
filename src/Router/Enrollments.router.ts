import express, { Response } from "express";
import { AuthRequest } from "../MiddleWare/auth.middleware";
import { getUserJoin, JoinCourse } from "../Controller/enrollment.controller";
export const EnrollmentRouter = express.Router();

EnrollmentRouter.post('/joinCourse', async (req: AuthRequest, res: Response): Promise<any> => {
    const idUser = req.user?.id!
    const { idCourse } = req.body
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const isJoin = await getUserJoin(idCourse)
        if (isJoin) {
            return res.status(200).json({ message: "Đã Join", result: 0, data: [] })


        } else {

            await JoinCourse(idUser, idCourse)
            return res.status(200).json({ message: "Thành công", result: 0, data: [] })

        }

    } catch (error) {
        return res.status(200).json({ message: "error", result: -2, data: [] })

    }
})