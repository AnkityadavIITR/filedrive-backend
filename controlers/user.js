import { User } from "../models/user.js";
import File from '../models/file.js';

export async function addUser(req, res) {
  console.log(req.body);
  try {
    const user = await User.find({ email: req.body.email });
    console.log("user", user);
    if (user.length) {
      console.log("check");
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    const response = await User.create(req.body);
    if (response) {
      return res.status(201).json({
        success: true,
        message: "User created",
      });
    }
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Error in saving user",
    });
  }
}

export async function updateUser(req, res) {
  try {
    const reponse = await User.findOneAndUpdate(
      { email: req.body.email },
      { emailVerified: true },
      { new: true }
    );
    if (reponse) {
      return res.status(200).json({
        success: true,
        message: "successfully updated",
        data: reponse,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      success: false,
      message: "Internal error",
    });
  }
}


export const getTeams=async(req,res)=>{
  const userId = req.user._id;

  try {
      const user = await User.findById(userId).populate('teams');
      if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          });
      }
      const teams = user.teams;
      return res.status(200).json({
          success: true,
          data: teams
      });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const getData = async (req, res) => {
    const userId=req.user._id
  try {
    const response = await User.findById(userId)
      .populate('files');

      console.log(response);
    if(!response){
        return res.status(404).json({
            success:"false",
            message:"user doen't exist"
        })
    } 

    return res.status(200).json({
        success:"true",
        files:response.files
    })
  } catch (e) {
    console.log("error",e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const postUserFile=async(req,res)=>{
  const { title, content } = req.body;

  try {
    // Create a new file with the provided title and content
    const userId = req.user._id;
    const file = await File.create({ title, content,owner:userId });

    // Find the authenticated user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Add the ID of the newly created file to the user's files array
    user.files.push(file._id);
    await user.save();

    return res.status(201).json({ success: true, message: 'File uploaded successfully',user:user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
  }