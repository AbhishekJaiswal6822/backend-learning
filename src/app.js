import expreess from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = expreess()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(expreess.json({limit:"16kb"}))
app.use(expreess.urlencoded({expected: true, limit :"16kb"}))
app.use(expreess.static("public"))
app.use(cookieParser())

export {app}