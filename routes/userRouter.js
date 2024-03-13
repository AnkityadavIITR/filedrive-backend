import express from "express"
import bodyParser from "body-parser";
import auth from "../middlewares/auth.js";
import { User } from "../models/user.js";
import { addUser } from "../controlers/user.js";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())


router.post("/register",auth.decodeToken,addUser);

router.post("/login",au)

export default router;
