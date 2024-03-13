import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path:"./../config.env"
})

async function dbConnect(){
    mongoose.connect
    (process.env.MONGO_URI,{dbName:"fdrive"})
    .then((c)=>console.log(`Database connected with ${c.connection.host}`))
    .catch(err=>console.log(err));
}
export default dbConnect;
