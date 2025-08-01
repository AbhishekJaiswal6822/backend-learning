import { v2 as cloudinary } from "cloudinary";
import fs from "fs";





// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


/* 
I created a utility function uploadOnCloudinary that takes a local file path and 
uploads the file to Cloudinary using cloudinary.uploader.upload() with resource_type: "auto" to support any file type (image, video, etc.).

If the upload is successful, I:

Log a success message along with the uploaded file’s URL.

Remove the locally stored temporary file using fs.unlinkSync() to free up space.

If the upload fails, I:

Catch the error and log it.

Check if the file still exists locally and delete it to avoid leftover temporary files.

Then return null to signal that the upload didn't succeed.

This ensures that all uploaded files are cleaned up from the server, whether the upload to Cloudinary was successful or not.
*/
const uploadOnCloudinary = async (LocalFilePath) =>{
    try {
        if (!LocalFilePath) return null
        // upload the file on cloudiinary 
        const response = await cloudinary.uploader.upload(LocalFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully 
        console.log("File is uoloaded on Cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localStorage) // remove the locally saved temporary file as the uploadoperation got failed
        return null;
    }
}


export {uploadOnCloudinary}