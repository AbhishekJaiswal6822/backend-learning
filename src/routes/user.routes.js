import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post(
  "/register",
  (req, res, next) => {
    console.log("✅ /register route hit");
    next();
  },
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

// TODO: Uncomment when loginUser is defined
// router.route("/login").post(loginUser);

export default router;
