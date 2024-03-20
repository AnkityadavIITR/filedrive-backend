import express from "express"
import bodyParser from "body-parser";
import auth from "../middlewares/auth.js";
import { addUser, updateUser,getData,getTeams ,postUserFile,deleteUserFile, getDeletedFiles} from "../controlers/user.js";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())


router.post("/register",auth.decodeToken,addUser);
router.patch("/verifyEmail",auth.decodeToken,updateUser);

router.get("/teams",auth.decodeToken,getTeams);

router.get("/data",auth.decodeToken,getData)

router.post("/uploadData",auth.decodeToken,postUserFile)
router.delete("/files/:fileId",auth.decodeToken,deleteUserFile)

router.get("/deleted-data",auth.decodeToken,getDeletedFiles)


export default router;
