import express from "express"
import bodyParser from "body-parser";
import auth from "../middlewares/auth.js";
import { addUser } from "../controlers/user.js";
import { createTeam,joinTeam,inviteTeam } from "../controlers/team.js";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())


router.post("/create",auth.decodeToken,createTeam);

router.post("/join/:teamid",auth.decodeToken,joinTeam);
router.post("/teamName",auth.decodeToken,inviteTeam )

export default router;