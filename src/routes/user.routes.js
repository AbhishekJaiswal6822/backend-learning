import { Router } from "express";
import { registerUser , loginUser, logoutUser} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWt } from "../middlewares/auth.middleware.js";


/**
 File uploading is not directly handled by Express — 
 so you use Multer middleware to parse and handle incoming multipart/form-data (like from Postman or frontend forms).

You use upload.fields() when you're expecting multiple file fields, like "avatar" and "coverImage".
 */
const router = Router();

router.route("/register").post(
  upload.fields([
    {name:"avatar",maxCount:1},
    {name:"coverImage",maxCount:1}
  ]),
  registerUser
)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWt ,logoutUser)

// TODO: Uncomment when loginUser is defined
// router.route("/login").post(loginUser);

export default router;
