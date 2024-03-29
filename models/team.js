import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  creationDate: { type: Date, default: Date.now },
  description: { type: String },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  shortId: { type: String,  unique: true, required:true },
  editor:{type:Boolean,require:true}
});

export const Team = mongoose.model("Team", teamSchema);
