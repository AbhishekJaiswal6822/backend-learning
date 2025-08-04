import multer from "multer";
import path from "path";
import fs from "fs";

// ✅ Correct upload path based on where your project actually runs
const uploadPath = path.join(process.cwd(), "public", "temp");


if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
console.log("✅ Upload path used by multer:", uploadPath);

// ✅ Setup multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // ✅ Correct folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // ✅ Original file name
  }
});

export const upload = multer({ storage });

