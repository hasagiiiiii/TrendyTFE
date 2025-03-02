import express, { Response } from "express";
import { AuthRequest } from "../MiddleWare/auth.middleware";
import { GetLessonById, InsertLessonByIdCourse } from "../Controller/Lesson.controller";
export const LessonRouter = express.Router();

LessonRouter.post('/lesson', async (req: AuthRequest, res: Response): Promise<any> => {
    console.log(req.body);
    console.log(req.file);
    const { title, course_id, content } = req.body
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const lesson = await GetLessonById(course_id)
        if (lesson.length && lesson[lesson.length - 1].order_index) {
            const data = await InsertLessonByIdCourse({ title: title, content: content, course_id: course_id, order_index: lesson[lesson.length - 1].order_index + 1, video_url: req.file?.filename || '' })
            return res.status(200).json({ message: 'Thành công', data: data, result: 0 })

        } else {
            console.log('vao day');
            const data = await InsertLessonByIdCourse({ title: title, content: content, course_id: course_id, order_index: 1, video_url: req.file?.filename || '' })

            return res.status(200).json({ message: 'Thành công', data: data, result: 0 })
        }
    } catch (e) {
        return res.status(401).json({ message: 'Thất bại', result: -1 })

    }
})

LessonRouter.post('/getPlayListbyID', async (req: AuthRequest, res: Response): Promise<any> => {
    const { course_id } = req.body
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const data = await GetLessonById(course_id)
        console.log('data', data);
        return res.status(200).json({
            message: 'Thành công', data: data,
            result: 0
        })
    } catch (e) {
        return res.status(401).json({ message: 'Thất bại', result: -1 })

    }
})