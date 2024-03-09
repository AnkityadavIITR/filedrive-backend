import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    String,
    require: true,
    unique: true,
  },
  email: {
    String,
    require: true,
  },
  photo: {
    url: {
      type: String,
    },
  },
  teams: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team' 
    }
  ],
  data:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    }
  ]
});

export const User = mongoose.model("user", userSchema);
