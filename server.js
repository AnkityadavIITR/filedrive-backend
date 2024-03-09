import cors from "cors"
import { config } from "dotenv";
import dbConnect from "./database/data";
import {app} from "./index"

dbConnect();

config({
    path:"/config.env"
})

const PORT=4000 || process.env.PORT
app.use(cors());

app.get("/",(req,res)=>{
    res.json("hey")
})

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})
