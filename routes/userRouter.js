import express from "express"
import bodyParser from "body-parser";
import auth from "../middlewares/auth.js";
import { addUser, updateUser,getData,getTeams ,postUserFile} from "../controlers/user.js";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())


router.post("/register",auth.decodeToken,addUser);
router.patch("/verifyEmail",auth.decodeToken,updateUser);

router.get("/teams",auth.decodeToken,getTeams);

router.get("/data",auth.decodeToken,getData)

router.post("/uploadData",auth.decodeToken,postUserFile)




export default router;
