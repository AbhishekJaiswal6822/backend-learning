// src/utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Make path safe inside project dir
    const safePath = path.relative(process.cwd(), localFilePath);

    const result = await cloudinary.uploader.upload(safePath, {
      resource_type: "auto"
    });

    fs.unlinkSync(localFilePath); // remove local file
    return result;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    return null;
  }
};
