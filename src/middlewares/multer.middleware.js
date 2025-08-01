import multer from "multer";

/*
Multer is a middleware used in Node.js (specifically with Express) to handle file uploads. 
It processes multipart/form-data, which is the encoding type used for forms that include files.
In Multer, we can control how and where files are stored using multer.diskStorage() — a storage engine provided by Multer.

📁 multer.diskStorage():
It allows us to configure two main things:

destination(req, file, cb)
➤ Defines where the uploaded file should be stored (e.g., uploads/ folder)

filename(req, file, cb)
➤ Defines what name the uploaded file should be saved with (e.g., adding a timestamp)

Both destination and filename functions receive three parameters:

req – the request object

file – the file object being uploaded

cb – a callback function used to return the desired value

*/

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null, "/public/temp")
    },
    filename: function (req,file,cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
})