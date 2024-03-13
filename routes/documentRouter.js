import express from "express"
import bodyParser from "body-parser";

const router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json())

router.get("/add",(req,res)=>{
    
});

export default router;
