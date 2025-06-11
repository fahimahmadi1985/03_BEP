import {Router} from 'express';
import { loginUsers, registerUsers } from '../controllers/users';
import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb)=>{
        // picture.png -> picture_9320429384029.png
        const number = Date.now(); //34242323423
        const fileName = file.originalname.split(".")[0];
        const fileExt = file.originalname.split(".")[1];
        const newFileName = fileName + "_" + number + "." + fileExt;
        req.profile = newFileName;
        cb(null, newFileName);
    }
});
const upload = multer({storage: storage});

const router = Router();

router.post("/register", upload.single("profile"), registerUsers);
router.post("/login", loginUsers);


export default router;