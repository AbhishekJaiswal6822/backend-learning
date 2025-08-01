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

// routes import
import userRouter from "./routes/user.routes.js"


// routes declaration 
app.use("/api/v1/users",userRouter)


// http://localhost:8000/api/v1/users/register
export {app}