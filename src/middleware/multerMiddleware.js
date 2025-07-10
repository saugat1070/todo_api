import multer from "multer";

const storage = multer.diskStorage({
    destination : (err,file,cb)=> cb(null,"/storage"),
    filename : (err,file,cb) => cb(null,Date.now()+"-"+req.file.filename)
});

const upload = multer({storage : storage});
export default upload;