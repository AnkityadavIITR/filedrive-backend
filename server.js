import { config } from "dotenv";
import dbConnect from "./database/data.js";
import {app} from "./index.js"

dbConnect();

config({
    path:"/config.env"
})

const PORT=4000 || process.env.PORT

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})
