import { Team} from "../models/team.js";
import { User } from "../models/user.js";
import File from "../models/file.js";
import { nanoid } from "nanoid";

export async function createTeam(req,res){
    console.log(req.body);
    const { teamName} = req.body;
    const userId=req.user._id;
    try {
        const shortId = nanoid();
        const team = await Team.create({ name: teamName, shortId, creator: userId,members: [userId] });
        const user = await User.findByIdAndUpdate(userId, { $push: { teams: team._id } }, { new: true });
        res.status(201).json({ success:"true", team });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

}

export async function joinTeam(req, res) {
    console.log(req.body);
    const { shortId } = req.body;
    const userId = req.user._id;
    try {
        const team = await Team.findOne({ shortId }); // Use findOne instead of find
        if (team) {
            const user = await User.findByIdAndUpdate(userId, { $push: { teams: team._id } }, { new: true });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }
            team.members.push(userId);
            await team.save();
            return res.status(201).json({
                success: true,
                team
            });
        }
        return res.status(404).json({
            success: false,
            message: "Team doesn't exist"
        });
    } catch (e) {
        console.log("Can't join the team", e);
        return res.status(500).json({
            success: false,
            message: "Internal Error"
        });
    }
}

export const getTeamData=async (req, res) => {
    const teamId = req.params.teamId;

    try {
        const team = await Team.findById(teamId).populate('files');
        if (!team) {
            return res.status(404).json({
                success: false,
                message: "Team not found"
            });
        }
        // Extract the documents from the team object
        const documents = team.files;
        return res.status(200).json({
            success: true,
            files: documents
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const deleteTeamData=async (req, res) => {
    const { teamId, fileId } = req.params;

    try {
        const team = await Team.findById(teamId);

        if (!team) {
            return res.status(404).json({
                success: false,
                message: "Team not found"
            });
        }
        const index = team.files.indexOf(fileId);
        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: "File not found in team"
            });
        }
        team.files.splice(index, 1);
        await team.save();

        return res.status(200).json({
            success: true,
            message: "File deleted successfully from team"
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const uploadTeamFile=async(req,res)=>{
    const { teamId } = req.params;
    const { title,content } = req.body;
    const userId = req.user._id;
    try{
    // Create a new file document with the provided data
    const file = await File.create({title:title, content: content, owner: userId });
    // Obtain the ID of the newly created file
    const fileId = file._id;
    // Find the team by its ID
    const team = await Team.findById(teamId);
    // Check if the team exists and if the user is authorized to upload data to it
    if (!team || !team.members.includes(userId)) {
      return res.status(404).json({ success: false, message: "Team not found or user not authorized" });
    }
    // Add the ID of the file to the team's files array
    team.files.push(fileId);
    await team.save();
    return res.status(200).json({ success: true, message: "File uploaded and added to the team's files array successfully",file:file });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}