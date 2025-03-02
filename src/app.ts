import express, { Request, RequestHandler, Response } from "express";
import cors from "cors";
import http from 'http';
import { AuthRouter } from "./Router/Auth.router";
import cookieParser from "cookie-parser";
import * as env from "dotenv"
import multer, { FileFilterCallback } from "multer";
import { verifyTokenMiddleware } from "./MiddleWare/auth.middleware";
import path from "path";
import fs from "fs";
import { Courses } from "./Router/Courses.router";
import { Category } from "./Router/Category.router";
import { LessonRouter } from "./Router/Lesson.router";
const app = express()
const server = http.createServer(app)
const port = 3001
const corsOptions = {
    origin: ["http://localhost:3000"], // frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // cookie, HTTP Authentication
    optionsSuccessStatus: 204,
};
env.config()
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// Tạo thư mục lưu trữ nếu chưa có
const UPLOADS_DIR = "uploads";
if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR);
}

// ✅ Cấu hình fileFilter chỉ cho phép ảnh và video
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
        cb(null, true);
    } else {
        cb(new Error("Chỉ được upload ảnh hoặc video!"));
    }
};

// ✅ Cấu hình Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_DIR);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage, fileFilter });
app.use("/api", AuthRouter, Category)
app.use('/api', upload.single("thumbnail"), verifyTokenMiddleware, Courses)
app.use('/course', upload.single("video_url"), verifyTokenMiddleware, LessonRouter)
app.get('/test', (req: any, res: any) => {
    res.status(200).json({ message: 'Test' })
})
// ✅ Sử dụng upload.single() trong `app.post()`, không dùng `app.use()`
app.post("/upload", upload.single("file"), (req: Request, res: Response): any => {
    if (!req.file) {
        return res.status(400).json({ error: "File không hợp lệ!" });
    }
    res.json({ url: `http://localhost:${port}/uploads/${req.file.filename}` });
});
app.use("/uploads", express.static(UPLOADS_DIR));
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


