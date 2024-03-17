import { User } from "../models/user.js";

export async function addUser(req, res) {
    console.log(req.body);
    try {
        const user = await User.find({ email: req.body.email });
        console.log("user", user)
        if (user.length) {
            console.log("check")
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }
        const response = await User.create(req.body);
        if (response) {
            return res.status(201).json({
                success: true,
                message: "User created"
            });
        }
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Error in saving user"
        });
    }
}


export async function updateUser(req,res){
    try{
        const reponse =await User.findOneAndUpdate({email:req.body.email},{emailVerified:true},{new:true})
        if(reponse){
            return res.status(200).json({
                success:true,
                message:"successfully updated",
                data:reponse
            })
        }
    }catch(e){
        console.log(e);
        return res.status(404).json({
            success:false,
            message:"Internal error"
        })
    }
}