import { Team} from "../models/team.js";
import { User } from "../models/user.js";
import { nanoid } from "nanoid";

export async function createTeam(req,res){
    const { teamName} = req.body;
    const userId=req.user._id;
    try {
        const shortId = nanoid();
        const team = await Team.create({ name: teamName, shortId });
        const user = await User.findByIdAndUpdate(userId, { $push: { teams: team._id } }, { new: true });
        res.status(201).json({ team, user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

}

export async function inviteTeam(req,res){
    const {teamName}=req.body;
    try{
        const team= await Team.find({name:teamName});
        if(team){
            res.status(200).json({
                success:true,
                teamCode:team.shortId
            })
        }
        res.status(300).json(({
            success:false,
            message:"no team exist"
        }))
    }catch(e){
        res.status(404).json({
            success:false,
            message:"Internal Error"
        })
    }
}

export async function joinTeam(req,res){
    const { shortId} = req.body;
    try{
        
    }catch(e){

    }
}