import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  emailVerified:{
    type:Boolean,
    required:true,
  },
  password: {
    type: String,
  },
  photo: {
    url: {
      type: String,
    },
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  files: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
    },
  ],
});

export const User = mongoose.model("User", userSchema); // Corrected the model name to start with an uppercase letter
