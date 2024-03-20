import mongoose from "mongoose";
const fileSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  creationDate: { type: Date, default: Date.now, required:true },
  type:{type:String,require:true}
  // sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const File=mongoose.model("File",fileSchema);
export default File;
