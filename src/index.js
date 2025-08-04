import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import userRouter from "./routes/user.routes.js"; // ✅ Add this line!

dotenv.config({ path: './.env' });

app.use("/api/v1/users", userRouter); // ✅ Mounting route here

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
