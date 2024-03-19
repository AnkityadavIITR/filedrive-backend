import express from "express"
import bodyParser from "body-parser";
import auth from "../middlewares/auth.js";
import { addUser } from "../controlers/user.js";
import { createTeam,joinTeam,getTeamData, deleteTeamData,uploadTeamFile} from "../controlers/team.js";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())


router.post("/create",auth.decodeToken,createTeam);

router.post("/join",auth.decodeToken,joinTeam);

router.get("/:teamId", auth.decodeToken,getTeamData );
router.delete("/:teamId/file/:fileId", auth.decodeToken, deleteTeamData);

router.post("/upload/:teamId",auth.decodeToken,uploadTeamFile)


export default router;