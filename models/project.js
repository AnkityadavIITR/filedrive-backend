import mongoose from "mongoose";
const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  creationDate: { type: Date, default: Date.now, required:true },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});
const Document=mongoose.model("Document",documentSchema);
export default Document;
