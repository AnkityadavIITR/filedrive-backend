import { User } from "../models/user.js";
import File from "../models/file.js";

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

export const getTeams = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId).populate("teams");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const teams = user.teams;
    return res.status(200).json({
      success: true,
      data: teams,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getData = async (req, res) => {
  const userId = req.user._id;
  try {
    const response = await User.findById(userId).populate("files");

    console.log(response);
    if (!response) {
      return res.status(404).json({
        success: "false",
        message: "user doen't exist",
      });
    }

    return res.status(200).json({
      success: "true",
      files: response.files,
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const postUserFile = async (req, res) => {
  const { title, content, type } = req.body;

  try {
    // Create a new file with the provided title and content
    const userId = req.user._id;
    const file = await File.create({
      title,
      content,
      owner: userId,
      type: type,
    });

    // Find the authenticated user
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Add the ID of the newly created file to the user's files array
    user.files.push(file._id);
    await user.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "File uploaded successfully",
        file: file,
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const deleteUserFile = async (req, res) => {
  const userId = req.user._id;
  const { fileId } = req.params;

  try {
    const user = await User.findById(userId).populate("files");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const index = user.files.findIndex((file) => file._id.toString() === fileId);
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    const deletedFile = user.files.splice(index, 1)[0]; // Remove the file and store the deleted file

    // Check if the 'deleted' field exists, if not, initialize it as an empty array
    if (!user.deleted) {
      user.deleted = [];
    }

    // Add the fileId to the 'deleted' array
    user.deleted.push(deletedFile);

    await user.save();

    // Return the deleted file and the remaining files
    return res.status(200).json({
      success: true,
      message: "File deleted",
      deletedFile,
      remainingFiles: user.files,
    });
  } catch (error) {
    console.error("Error deleting file:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getDeletedFiles = async (req, res) => {
  const userId = req.user._id;
  try {
    const response = await User.findById(userId).populate("deleted");

    console.log(response);
    if (!response) {
      return res.status(404).json({
        success: "false",
        message: "user doen't exist",
      });
    }

    return res.status(200).json({
      success: "true",
      files: response.deleted,
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};